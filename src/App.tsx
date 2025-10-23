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

interface AppProps {
  gameStarted: boolean;
  announceBotCollision: () => void;
}

export default function App({ gameStarted, announceBotCollision }: AppProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  const shipRef = useRef<Ship>(new Ship());
  const botShipRef = useRef<Ship>(new Ship());
  const bulletsRef = useRef<Bullet[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const stateRef = useRef<string>("TITLE");

  const botMoveRef = useRef<number | null>(null);
  const workerRef = useRef<Worker | null>(null);

  const spawnWave = useCallback((n: number) => {
    for (let i = 0; i < n; i++) {
      const a = new Asteroid();
      if (dist(a.pos, botShipRef.current.pos) < 120) {
        a.pos[0] += 200;
        a.pos[1] += 200;
      }
      asteroidsRef.current.push(a);
    }
  }, []);

  const reset = useCallback(() => {
    shipRef.current = new Ship();
    botShipRef.current = new Ship();
    bulletsRef.current = [];
    asteroidsRef.current = [];
    spawnWave(START_ASTEROIDS);
    stateRef.current = "TITLE";
  }, [spawnWave]);

  const applyBotMove = useCallback((move: number | null, dt: number) => {
    if (move === null) return;

    const ship = botShipRef.current;
    ship.thrusting = false;

    switch (move) {
      case 0: ship.thrusting = true; break;
      case 1: ship.angle -= 220 * dt; break;
      case 2: ship.angle += 220 * dt; break;
      case 3: {
        const [dx, dy] = vecFromAngleDeg(ship.angle);
        bulletsRef.current.push(new Bullet([ship.pos[0] + dx * 18, ship.pos[1] + dy * 18], ship.angle, ship.vel));
        break;
      }
    }

    ship.angle = (ship.angle + 360) % 360;
  }, []);

  function updateGame(dt: number) {
  // Update user only if playing
    if (stateRef.current === "PLAYING") {
      shipRef.current.update(dt);
    }

    // Bot moves and updates independently, as long as it hasn't died
    if (botMoveRef.current !== null) {
      applyBotMove(botMoveRef.current, dt);
      botShipRef.current.update(dt);
    }

    // Only update bullets and asteroids if game has started
    if (stateRef.current !== "TITLE") {
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

      if (asteroidsRef.current.length === 0) spawnWave(START_ASTEROIDS + 1);
    }

    // Bot collisions — stops only if the bot itself hits an asteroid
    for (let i = 0; i < asteroidsRef.current.length; i++) {
      if (dist(botShipRef.current.pos, asteroidsRef.current[i].pos) < asteroidsRef.current[i].radius + botShipRef.current.radius - 3) {
        announceBotCollision();
        stateRef.current = "GAMEOVER";
        asteroidsRef.current.splice(i, 1);
        botMoveRef.current = null;
        break;
      }
    }
  }


  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;

    function step(now: number) {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = Math.min((now - lastTimeRef.current) / 1000, 1 / 12);
      lastTimeRef.current = now;

      updateGame(dt);
      drawGame(ctx, botShipRef.current, bulletsRef.current, asteroidsRef.current, stateRef.current);

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // Initialize bot worker once
  useEffect(() => {
    workerRef.current = new Worker(new URL('./wasm/botWorker.js', import.meta.url));
    workerRef.current.onmessage = (ev) => { botMoveRef.current = ev.data; };
    return () => { workerRef.current?.terminate(); };
  }, []);

  // Send bot state to worker periodically, only when game is PLAYING
  useEffect(() => {
    const interval = setInterval(() => {
      if (workerRef.current && stateRef.current === "PLAYING") {
        workerRef.current.postMessage({
          ship: { pos: botShipRef.current.pos, vel: botShipRef.current.vel, angle: botShipRef.current.angle },
          asteroids: asteroidsRef.current.map(a => ({ pos: a.pos, vel: a.vel, radius: a.radius }))
        });
      }
    }, 1000 / 15);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameStarted) {
      reset();
      stateRef.current = "PLAYING";
    }
  }, [gameStarted, reset]);

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
