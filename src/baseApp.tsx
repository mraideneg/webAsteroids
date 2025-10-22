import React, { useRef, useEffect, useCallback } from "react";

// AsteroidsWeb.tsx
// Single-file React + TypeScript port of the provided Python/Pygame Asteroids game.
// - Canvas 450x450
// - Keyboard controls: ArrowLeft/ArrowRight or A/D to rotate, ArrowUp/W to thrust, Space to shoot
// - Optional WebSocket input support (commented section) to approximate the original TCP input
// - Uses requestAnimationFrame game loop for smooth rendering

// Constants (mirrors the Python constants)
const WIDTH = 450;
const HEIGHT = 450;
const FPS = 60;
const SHIP_THRUST = 200; // px / s^2
const SHIP_ROT_SPEED = 220; // degrees / s
const FRICTION = 10; // damping
const BULLET_SPEED = 500; // px / s
const BULLET_LIFETIME = 1.6; // s
const ASTEROID_MIN_SPEED = 10;
const ASTEROID_MAX_SPEED = 60;
const ASTEROID_SIZES = new Map<number, number>([[3, 40], [2, 24], [1, 12]]);
const START_ASTEROIDS = 20;
const INVULNERABLE_TIME = 2.0;

// Colors
const BG = "#090914";
const WHITE = "#f0f0f0";
const PINK = "#f064b4";
const YELLOW = "#f0dc5a";
const RED = "#dc5a5a";

type Vec2 = [number, number];

// Utility functions
function wrapPosition(x: number, y: number): Vec2 {
  let nx = x % WIDTH;
  if (nx < 0) nx += WIDTH;
  let ny = y % HEIGHT;
  if (ny < 0) ny += HEIGHT;
  return [nx, ny];
}

function rad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function vecFromAngleDeg(angleDeg: number): Vec2 {
  const r = rad(angleDeg);
  return [Math.cos(r), -Math.sin(r)];
}

function dist(a: Vec2, b: Vec2): number {
  const dx = a[0] - b[0];
  const dy = a[1] - b[1];
  return Math.hypot(dx, dy);
}

// Types
class Ship {
  pos: Vec2;
  vel: Vec2;
  angle: number; // degrees
  radius: number;
  thrusting: boolean;
  invulnerable: boolean;
  invulnerableTimer: number;

  constructor() {
    this.pos = [WIDTH / 2, HEIGHT / 2];
    this.vel = [0, 0];
    this.angle = 90;
    this.radius = 12;
    this.thrusting = false;
    this.invulnerable = true;
    this.invulnerableTimer = INVULNERABLE_TIME;
  }

  update(dt: number) {
    if (this.thrusting) {
      const [dx, dy] = vecFromAngleDeg(this.angle);
      this.vel[0] += dx * SHIP_THRUST * dt;
      this.vel[1] += dy * SHIP_THRUST * dt;
    }

    const speed = Math.hypot(this.vel[0], this.vel[1]);
    if (speed !== 0) {
      const accel = FRICTION * dt;
      if (accel > speed) {
        this.vel[0] = 0;
        this.vel[1] = 0;
      } else {
        this.vel[0] -= (this.vel[0] * FRICTION * dt) / speed;
        this.vel[1] -= (this.vel[1] * FRICTION * dt) / speed;
      }
    }

    const [nx, ny] = wrapPosition(this.pos[0] + this.vel[0] * dt, this.pos[1] + this.vel[1] * dt);
    this.pos[0] = nx;
    this.pos[1] = ny;

    if (this.invulnerable) {
      this.invulnerableTimer -= dt;
      if (this.invulnerableTimer <= 0) this.invulnerable = false;
    }
  }
}

class Bullet {
  pos: Vec2;
  vel: Vec2;
  life: number;

  constructor(pos: Vec2, angle: number, shipVel: Vec2) {
    this.pos = [pos[0], pos[1]];
    const [dx, dy] = vecFromAngleDeg(angle);
    this.vel = [shipVel[0] + dx * BULLET_SPEED, shipVel[1] + dy * BULLET_SPEED];
    this.life = BULLET_LIFETIME;
  }

  update(dt: number) {
    this.pos[0] += this.vel[0] * dt;
    this.pos[1] += this.vel[1] * dt;
    const [nx, ny] = wrapPosition(this.pos[0], this.pos[1]);
    this.pos[0] = nx;
    this.pos[1] = ny;
    this.life -= dt;
  }

  alive() {
    return this.life > 0;
  }
}

class Asteroid {
  pos: Vec2;
  size: number;
  radius: number;
  vel: Vec2;
  vertexCount: number;
  jag: number[];

  constructor(pos?: Vec2, size = 3) {
    if (!pos) {
      const side = ["left", "right", "top", "bottom"][Math.floor(Math.random() * 4)];
      let x = 0,
        y = 0;
      const r = ASTEROID_SIZES.get(size) ?? 24;
      if (side === "left") {
        x = -r * 2;
        y = Math.random() * HEIGHT;
      } else if (side === "right") {
        x = WIDTH + r * 2;
        y = Math.random() * HEIGHT;
      } else if (side === "top") {
        x = Math.random() * WIDTH;
        y = -r * 2;
      } else {
        x = Math.random() * WIDTH;
        y = HEIGHT + r * 2;
      }
      this.pos = [x, y];
    } else {
      this.pos = [pos[0], pos[1]];
    }
    this.size = size;
    this.radius = ASTEROID_SIZES.get(size) ?? 24;
    const angle = Math.random() * 360;
    const spd = (Math.random() * (ASTEROID_MAX_SPEED - ASTEROID_MIN_SPEED) + ASTEROID_MIN_SPEED) * (size === 1 ? 1.2 : 1.0);
    const [dx, dy] = vecFromAngleDeg(angle);
    this.vel = [dx * spd, dy * spd];
    this.vertexCount = 8 + Math.floor(Math.random() * 5); // 8..12
    this.jag = Array.from({ length: this.vertexCount }, () => 0.7 + Math.random() * 0.6);
  }

  update(dt: number) {
    this.pos[0] += this.vel[0] * dt;
    this.pos[1] += this.vel[1] * dt;
    const [nx, ny] = wrapPosition(this.pos[0], this.pos[1]);
    this.pos[0] = nx;
    this.pos[1] = ny;
  }
}

// React component
export default function AsteroidsWeb(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  // Game refs (mutable for performance)
  const shipRef = useRef<Ship>(new Ship());
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const scoreRef = useRef<number>(0);
  const livesRef = useRef<number>(1);
  const stateRef = useRef<string>("TITLE");

  // Input
  const inputRef = useRef({ left: false, right: false, up: false, shoot: false });

  // Optional: WebSocket remote input (commented by default)
  // const wsRef = useRef<WebSocket | null>(null);
  // useEffect(() => {
  //   // If you want to feed keypresses from a remote client, run a websocket server
  //   // and set its URL here (e.g. ws://localhost:5000/ws). The server should send
  //   // single-character messages like 'a', 'd', 'w' just like the Python version.
  //   const ws = new WebSocket("ws://localhost:5000/");
  //   ws.onmessage = (ev) => {
  //     const key = ev.data?.toString()?.toLowerCase();
  //     if (!key) return;
  //     if (key === "a") inputRef.current.left = true;
  //     if (key === "d") inputRef.current.right = true;
  //     if (key === "w") inputRef.current.up = true;
  //     if (key === " ") inputRef.current.shoot = true;
  //   };
  //   wsRef.current = ws;
  //   return () => { ws.close(); };
  // }, []);

  const reset = useCallback(() => {
    shipRef.current = new Ship();
    bulletsRef.current = [];
    asteroidsRef.current = [];
    scoreRef.current = 0;
    livesRef.current = 1;
    spawnWave(START_ASTEROIDS);
    stateRef.current = "TITLE";
  }, []);

  function spawnWave(n: number) {
    for (let i = 0; i < n; i++) {
      const a = new Asteroid(undefined, 3);
      if (dist(a.pos as Vec2, shipRef.current.pos as Vec2) < 120) {
        a.pos[0] += 200;
        a.pos[1] += 200;
      }
      asteroidsRef.current.push(a);
    }
  }

  function splitAsteroid(asteroid: Asteroid): Asteroid[] {
    if (asteroid.size > 1) {
      const children: Asteroid[] = [];
      for (let i = 0; i < 2; i++) {
        const newA = new Asteroid([asteroid.pos[0], asteroid.pos[1]], asteroid.size - 1);
        newA.vel[0] += (Math.random() * 2.4 - 1.2);
        newA.vel[1] += (Math.random() * 2.4 - 1.2);
        children.push(newA);
      }
      return children;
    }
    return [];
  }

  function updateGame(dt: number) {
    if (stateRef.current !== "PLAYING") return;
    // Inputs
    const inpt = inputRef.current;
    let rotDir = 0;
    if (inpt.left) rotDir = 1;
    if (inpt.right) rotDir = -1;
    shipRef.current.thrusting = inpt.up;

    // Rotation
    if (rotDir !== 0) {
      shipRef.current.angle += rotDir * SHIP_ROT_SPEED * dt;
      shipRef.current.angle %= 360;
    }

    shipRef.current.update(dt);

    bulletsRef.current.forEach((b) => b.update(dt));
    asteroidsRef.current.forEach((a) => a.update(dt));

    bulletsRef.current = bulletsRef.current.filter((b) => b.alive());

    const toRemoveAst: number[] = [];
    const toAddAst: Asteroid[] = [];
    const bulletRemoveIdxs = new Set<number>();

    bulletsRef.current.forEach((b, bi) => {
      asteroidsRef.current.forEach((a, ai) => {
        if (dist(b.pos as Vec2, a.pos as Vec2) < a.radius + 2) {
          bulletRemoveIdxs.add(bi);
          toRemoveAst.push(ai);
          scoreRef.current += 100 * a.size;
          toAddAst.push(...splitAsteroid(a));
        }
      });
    });

    bulletsRef.current = bulletsRef.current.filter((_, i) => !bulletRemoveIdxs.has(i));

    // Remove asteroids safely by index
    const uniqueRemove = Array.from(new Set(toRemoveAst)).sort((a, b) => b - a);
    uniqueRemove.forEach((idx) => {
      if (idx >= 0 && idx < asteroidsRef.current.length) {
        asteroidsRef.current.splice(idx, 1);
      }
    });

    asteroidsRef.current.push(...toAddAst);

    // Collisions with ship
    if (!shipRef.current.invulnerable) {
      for (let i = 0; i < asteroidsRef.current.length; i++) {
        const a = asteroidsRef.current[i];
        if (dist(shipRef.current.pos as Vec2, a.pos as Vec2) < a.radius + shipRef.current.radius - 3) {
          livesRef.current -= 1;
          if (livesRef.current <= 0) {
            stateRef.current = "GAMEOVER";
          } else {
            shipRef.current = new Ship();
            shipRef.current.invulnerable = true;
            shipRef.current.invulnerableTimer = INVULNERABLE_TIME;
          }
          asteroidsRef.current.splice(i, 1);
          break;
        }
      }
    }

    if (asteroidsRef.current.length === 0) {
      spawnWave(START_ASTEROIDS + 1 + Math.floor(scoreRef.current / 1000));
    }

    // reset ephemeral inputs
    inputRef.current.shoot = false;
  }

  function drawGame(ctx: CanvasRenderingContext2D, now: number) {
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // draw asteroids
    for (const a of asteroidsRef.current) {
      drawAsteroid(ctx, a);
    }

    // draw bullets
    for (const b of bulletsRef.current) {
      ctx.beginPath();
      ctx.fillStyle = YELLOW;
      ctx.arc(b.pos[0], b.pos[1], 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // draw ship
    if (shipRef.current) drawShip(ctx, shipRef.current, now);

    // UI
    ctx.fillStyle = WHITE;
    ctx.font = "16px Consolas, monospace";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${scoreRef.current}`, 10, 8);
    ctx.fillText(`Lives: ${"❤".repeat(livesRef.current)}`, WIDTH - 120, 8);

    // overlays
    if (stateRef.current === "TITLE") {
      ctx.fillStyle = WHITE;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("ASTEROIDS", WIDTH / 2, HEIGHT / 2 - 40);
      ctx.font = "14px Consolas, monospace";
      ctx.fillText("Press ENTER to start  —  Arrow keys/AWD to move  Space to shoot", WIDTH / 2, HEIGHT / 2 + 20);
      ctx.textAlign = "left";
    } else if (stateRef.current === "PAUSED") {
      ctx.fillStyle = WHITE;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", WIDTH / 2, HEIGHT / 2);
      ctx.textAlign = "left";
    } else if (stateRef.current === "GAMEOVER") {
      ctx.fillStyle = RED;
      ctx.font = "48px Consolas, monospace";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", WIDTH / 2, HEIGHT / 2 - 30);
      ctx.fillStyle = WHITE;
      ctx.font = "16px Consolas, monospace";
      ctx.fillText(`Final Score: ${scoreRef.current}`, WIDTH / 2, HEIGHT / 2 + 10);
      ctx.fillText("Press ENTER to restart", WIDTH / 2, HEIGHT / 2 + 50);
      ctx.textAlign = "left";
    }
  }

  function drawShip(ctx: CanvasRenderingContext2D, ship: Ship, now: number) {
    const nose = vecFromAngleDeg(ship.angle);
    const left = vecFromAngleDeg(ship.angle + 130);
    const right = vecFromAngleDeg(ship.angle - 130);
    const scale = 14;
    const pts: Vec2[] = [];
    pts.push([ship.pos[0] + nose[0] * scale, ship.pos[1] + nose[1] * scale]);
    pts.push([ship.pos[0] + left[0] * scale * 0.9, ship.pos[1] + left[1] * scale * 0.9]);
    pts.push([ship.pos[0] + right[0] * scale * 0.9, ship.pos[1] + right[1] * scale * 0.9]);

    const blink = ship.invulnerable && Math.floor(now / 120) % 2 === 0;
    ctx.strokeStyle = ship.invulnerable && blink ? YELLOW : PINK;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    ctx.lineTo(pts[1][0], pts[1][1]);
    ctx.lineTo(pts[2][0], pts[2][1]);
    ctx.closePath();
    ctx.stroke();

    if (ship.thrusting) {
      const flameDir = vecFromAngleDeg(ship.angle + 180);
      const fscale = 8 + (Math.random() * 4 - 2);
      const f1: Vec2 = [ship.pos[0] + flameDir[0] * fscale, ship.pos[1] + flameDir[1] * fscale];
      ctx.strokeStyle = RED;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo((pts[1][0] + pts[2][0]) / 2, (pts[1][1] + pts[2][1]) / 2);
      ctx.lineTo(f1[0], f1[1]);
      ctx.stroke();
    }
  }

  function drawAsteroid(ctx: CanvasRenderingContext2D, a: Asteroid) {
    const cx = a.pos[0];
    const cy = a.pos[1];
    ctx.strokeStyle = WHITE;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < a.vertexCount; i++) {
      const ang = (360.0 * i) / a.vertexCount;
      const [vx, vy] = vecFromAngleDeg(ang);
      const r = a.radius * a.jag[i];
      const x = cx + vx * r;
      const y = cy + vy * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Main loop
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    // initialize
    reset();

    function step(now: number) {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = Math.min((now - lastTimeRef.current) / 1000, 1 / 12); // clamp large dt
      lastTimeRef.current = now;

      updateGame(dt);
      drawGame(ctx, now);

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reset]);

  // Key handling
  useEffect(() => {
    const input = inputRef.current;

    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      const key = e.key.toLowerCase();

      switch (key) {
        case "arrowleft":
        case "a":
          input.left = true;
          break;
        case "arrowright":
        case "d":
          input.right = true;
          break;
        case "arrowup":
        case "w":
          input.up = true;
          break;
        case " ":
          e.preventDefault();
          input.shoot = true;

          if (stateRef.current === "PLAYING") {
            const ship = shipRef.current;
            const [dx, dy] = vecFromAngleDeg(ship.angle);
            const spawn: Vec2 = [ship.pos[0] + dx * 18, ship.pos[1] + dy * 18];
            bulletsRef.current.push(new Bullet(spawn, ship.angle, ship.vel));
          }
          break;

        case "enter":
          if (stateRef.current === "TITLE" || stateRef.current === "GAMEOVER") {
            reset();
            stateRef.current = "PLAYING";
          }
          break;

        case "p":
          if (stateRef.current === "PLAYING") stateRef.current = "PAUSED";
          else if (stateRef.current === "PAUSED") stateRef.current = "PLAYING";
          break;

        case "escape":
          stateRef.current = "PAUSED";
          break;
      }
    };

    const handleKeyUp = (e: globalThis.KeyboardEvent) => {
      const key = e.key.toLowerCase();
      switch (key) {
        case "arrowleft":
        case "a":
          input.left = false;
          break;
        case "arrowright":
        case "d":
          input.right = false;
          break;
        case "arrowup":
        case "w":
          input.up = false;
          break;
        case " ":
          input.shoot = false;
          break;
      }
    };

    // ensure window always gets the focus for key events
    window.focus();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [reset]);

  // simple UI wrapper
  return (
    <div className="p-4">
      <canvas ref={canvasRef} width={WIDTH} height={HEIGHT} style={{ width: WIDTH, height: HEIGHT, display: "block", borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.5)" }} />
      <div className="mt-2 text-sm font-mono text-gray-200" style={{ color: "#e8e8e8" }}>
        <div>Controls: ArrowLeft/ArrowRight or A/D to rotate • ArrowUp/W to thrust • Space to shoot</div>
        <div>Press ENTER to start • P to pause</div>
      </div>
    </div>
  );
}
