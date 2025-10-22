importScripts('bot.js');

let botInstance = null;

const initBot = async () => {
  botInstance = await BotModule(); // BotModule is the global function from bot.js
};

initBot();

self.onmessage = async (ev) => {
  if (!botInstance) return;

  const { ship, asteroids } = ev.data;

  // Convert JS asteroid array into WASM AsteroidVector
  const wasmAsteroids = new botInstance.AsteroidVector();
  for (const a of asteroids) {
    const wa = new botInstance.Asteroid();
    wa.posX = a.pos[0];
    wa.posY = a.pos[1];
    wa.velX = a.vel[0];
    wa.velY = a.vel[1];
    wa.radius = a.radius;
    wasmAsteroids.push_back(wa);
    wa.delete();
  }

  const move = botInstance.decide(
    ship.pos[0],
    ship.pos[1],
    ship.vel[0],
    ship.vel[1],
    ship.angle,
    wasmAsteroids
  );

  wasmAsteroids.delete();

  self.postMessage(move);
};
