// importing from outside of /assets
importScripts('../bot.js');

let botInstance = null;

const initBot = async () => {
  // Override locateFile to find bot.wasm with the correct base path
  botInstance = await BotModule({
    locateFile: (path) => {
      if (path.endsWith('.wasm')) {
        // Go up one level from assets/ to find bot.wasm in root
        return '../' + path;
      }
      return path;
    }
  });
};

initBot();

self.onmessage = async (ev) => {
  if (!botInstance) return;

  const { ship, asteroids } = ev.data;

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
