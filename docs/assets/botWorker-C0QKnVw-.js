// botWorker-C0QKnVw-.js (or whatever your source file is)

// 1. Setup the necessary URL for dynamic import (requires 'type: module').
const botJsURL = new URL("./bot.js", import.meta.url);
let t = null; // 't' will hold the instantiated WASM module object

// 2. Self-executing async function to handle the WASM loading.
(async () => {
    try {
        console.log("Worker: Starting WASM module initialization...");

        // Dynamically import the Emscripten wrapper. This executes bot.js 
        // and defines the global factory function 'BotModule'.
        await import(botJsURL);
        
        // Check for the global function defined by the executed script.
        if (typeof self.BotModule !== 'function') {
            throw new Error("BotModule factory not available after dynamic import.");
        }
        
        // Call the factory function to load the WASM binary and instantiate the module.
        t = await self.BotModule(); 
        
        console.log("✅ Worker: WASM module successfully loaded. Bot is ready.");

    } catch (error) {
        console.error("❌ FATAL WASM Initialization Error:", error);
    }
})();

// 3. The primary message handler. It waits for 't' to be instantiated.
self.onmessage = async n => {
    // Exit early if the module hasn't finished loading yet (t is null).
    if (!t) {
        console.warn("Worker received message before WASM module was ready.");
        return;
    }
    
    // Deconstruct and prepare the data for the WASM function.
    const { ship: e, asteroids: l } = n.data;
    const a = new t.AsteroidVector; // Assuming this is your Embind vector class

    for (const o of l) {
        const s = new t.Asteroid;
        s.posX = o.pos[0], s.posY = o.pos[1], s.velX = o.vel[0], s.velY = o.vel[1], s.radius = o.radius;
        a.push_back(s);
        s.delete(); // Clean up the individual Asteroid objects after pushing
    }

    // Call the WASM-exported C++ function.
    const i = t.decide(e.pos[0], e.pos[1], e.vel[0], e.vel[1], e.angle, a);
    
    // Clean up the vector container.
    a.delete();

    // Send the result (decision) back to the main thread.
    self.postMessage(i);
};
