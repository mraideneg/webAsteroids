import React, { useRef, useEffect, useCallback } from "react";
import {
  Ship,
  Bullet,
  Asteroid,
  WIDTH,
  HEIGHT,
  START_ASTEROIDS,
  vecFromAngleDeg,
  dist,
  splitAsteroid,
  drawGame
} from "./gameCore";

interface BaseAppProps {
  announceHumanCollision: () => void;
  announceGameStart: () => void;
}

export default function BaseApp({ announceHumanCollision, announceGameStart }: BaseAppProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const shipRef = useRef<Ship>(new Ship());
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const stateRef = useRef<string>("TITLE");

  const inputRef = useRef({ left: false, right: false, up: false, shoot: false });

  // Spawn a wave of asteroids
  const spawnWave = useCallback((n: number) => {
    for (let i = 0; i < n; i++) {
      const a = new Asteroid();
      if (dist(a.pos, shipRef.current.pos) < 120) { a.pos[0] += 200; a.pos[1] += 200; }
      asteroidsRef.current.push(a);
    }
  }, []);

  // Reset game
  const reset = useCallback(() => {
    shipRef.current = new Ship();
    bulletsRef.current = [];
    asteroidsRef.current = [];
    spawnWave(START_ASTEROIDS);
    stateRef.current = "TITLE";
  }, [spawnWave]);

  // Update game logic
  const updateGame = useCallback((dt: number) => {
    if (stateRef.current !== "PLAYING") return;

    const input = inputRef.current;
    let rotDir = 0;
    if (input.left) rotDir = 1;
    if (input.right) rotDir = -1;

    shipRef.current.thrusting = input.up;
    if (rotDir !== 0) {
      shipRef.current.angle += rotDir * 220 * dt;
      shipRef.current.angle %= 360;
    }

    shipRef.current.update(dt);
    bulletsRef.current.forEach(b => b.update(dt));
    asteroidsRef.current.forEach(a => a.update(dt));
    bulletsRef.current = bulletsRef.current.filter(b => b.alive());

    const toRemoveAst: number[] = [];
    const toAddAst: Asteroid[] = [];
    const bulletRemoveIdxs = new Set<number>();

    bulletsRef.current.forEach((b, bi) => {
      asteroidsRef.current.forEach((a, ai) => {
        if (dist(b.pos, a.pos) < a.radius + 2) {
          bulletRemoveIdxs.add(bi);
          toRemoveAst.push(ai);
          toAddAst.push(...splitAsteroid(a));
        }
      });
    });

    bulletsRef.current = bulletsRef.current.filter((_, i) => !bulletRemoveIdxs.has(i));
    Array.from(new Set(toRemoveAst)).sort((a, b) => b - a).forEach(idx => {
      if (idx >= 0 && idx < asteroidsRef.current.length) asteroidsRef.current.splice(idx, 1);
    });
    asteroidsRef.current.push(...toAddAst);

    if (!shipRef.current.invulnerable) {
      for (let i = 0; i < asteroidsRef.current.length; i++) {
        if (dist(shipRef.current.pos, asteroidsRef.current[i].pos) < asteroidsRef.current[i].radius + shipRef.current.radius - 3) {
          announceHumanCollision();
          stateRef.current = "GAMEOVER";
          asteroidsRef.current.splice(i, 1);
          break;
        }
      }
    }

    if (asteroidsRef.current.length === 0) spawnWave(START_ASTEROIDS + 1);

    input.shoot = false;
  }, [spawnWave, announceHumanCollision]);

  // Main loop
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    function step(now: number) {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = Math.min((now - lastTimeRef.current) / 1000, 1 / 12);
      lastTimeRef.current = now;

      updateGame(dt);
      drawGame(ctx, shipRef.current, bulletsRef.current, asteroidsRef.current, stateRef.current);

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [updateGame]);

  // Handle keyboard input
  useEffect(() => {
    const input = inputRef.current;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      switch (key) {
        case "arrowleft": case "a": input.left = true; break;
        case "arrowright": case "d": input.right = true; break;
        case "arrowup": case "w": input.up = true; break;
        case " ": e.preventDefault(); input.shoot = true;
          if (stateRef.current === "PLAYING") {
            const [dx, dy] = vecFromAngleDeg(shipRef.current.angle);
            bulletsRef.current.push(new Bullet([shipRef.current.pos[0] + dx * 18, shipRef.current.pos[1] + dy * 18], shipRef.current.angle, shipRef.current.vel));
          }
          break;
        case "enter":
          if (stateRef.current === "TITLE" || stateRef.current === "GAMEOVER") {
            announceGameStart();
            reset();
            stateRef.current = "PLAYING";
          }
          break;
        case "p":
          stateRef.current = stateRef.current === "PLAYING" ? "PAUSED" : "PLAYING";
          break;
        case "escape":
          stateRef.current = "PAUSED";
          break;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      switch (key) {
        case "arrowleft": case "a": input.left = false; break;
        case "arrowright": case "d": input.right = false; break;
        case "arrowup": case "w": input.up = false; break;
        case " ": input.shoot = false; break;
      }
    };

    window.focus();
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [reset, announceGameStart]);

  return (
    <div className="p-4 canvas-wrapper">
      <canvas
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{
          width: `${WIDTH}px`,
          height: `${HEIGHT}px`,
          borderRadius: 8,
          boxShadow: "0 6px 18px rgba(0,0,0,0.5)"
        }}
      />
    </div>
  );
}
