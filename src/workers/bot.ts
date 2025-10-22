// botWorker.ts
import createBotModule from '../wasm/bot.js';

interface ShipState {
  pos: [number, number];
  vel: [number, number];
  angle: number;
}

interface AsteroidState {
  pos: [number, number];
  vel: [number, number];
  radius: number;
}

// Initialize WASM
let bot: any = null;

createBotModule().then((Module: any) => {
  bot = new Module.ship_trajectory(5); // 5 layers
  postMessage({ type: 'ready' });
});

// Listen for messages from main thread
onmessage = (e: MessageEvent) => {
  if (!bot) return; // Not ready yet

  const { ship, asteroids } = e.data as { ship: ShipState; asteroids: AsteroidState[] };
  
  // Convert asteroids to the format your bot expects
  const astArr = asteroids.map(a => ({
    pos: a.pos,
    vel: a.vel,
    rad: a.radius,
  }));

  const move = bot.best_move(
    ship.pos[0], ship.pos[1],
    ship.vel[0], ship.vel[1],
    ship.angle,
    { trajectories: [astArr], num_asteroids: asteroids.length } // simplified trajectory for now
  );

  postMessage({ type: 'move', move });
};
