// botWorker-C0QKnVw-.js (FINAL ATTEMPT: Using importScripts inside Module Worker)

// 1. Setup the necessary URL (we still need this for Emscripten's inner workings
//    if it needs to resolve other assets, but we'll use a direct path for now).
const botJsURL = "./bot.js"; // Use a simple relative path for importScripts
let t = null;

try {
    console.log("Worker: Starting WASM module initialization via importScripts...");

    // This forces the script to execute in the worker's global scope (self),
    // guaranteeing that 'BotModule' is created globally.
    // This is safe because you reverted to a Module Worker (which allows this context).
    self.importScripts(botJsURL); 

    // Check for the global function defined by the executed script.
    if (typeof self.BotModule !== 'function') {
        // If this line executes, something is fundamentally wrong with the bot.js file content.
        throw new Error("BotModule factory not available after importScripts. Check the bot.js file content.");
    }
    
    // Call the factory function to load the WASM binary and instantiate the module.
    // We must call it inside an async IIFE or function because it returns a Promise.
    (async () => {
        t = await self.BotModule(); 
        console.log("✅ Worker: WASM module successfully loaded. Bot is ready.");
    })();

} catch (error) {
    console.error("❌ FATAL WASM Initialization Error (importScripts failed):", error);
}

// 3. The primary message handler (remains the same).
self.onmessage = async n => {
    // ... rest of your message handling logic (no changes) ...
    if (!t) {
        console.warn("Worker received message before WASM module was ready.");
        return;
    }
    
    // Deconstruct and prepare the data for the WASM function.
    const { ship: e, asteroids: l } = n.data;
    const a = new t.AsteroidVector;

    for (const o of l) {
        const s = new t.Asteroid;
        s.posX = o.pos[0], s.posY = o.pos[1], s.velX = o.vel[0], s.velY = o.vel[1], s.radius = o.radius;
        a.push_back(s);
        s.delete();
    }

    // Call the WASM-exported C++ function.
    const i = t.decide(e.pos[0], e.pos[1], e.vel[0], e.vel[1], e.angle, a);
    
    // Clean up the vector container.
    a.delete();

    // Send the result (decision) back to the main thread.
    self.postMessage(i);
};
