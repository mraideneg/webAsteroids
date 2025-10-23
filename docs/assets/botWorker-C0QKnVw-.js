// botWorker-C0QKnVw-.js (FINAL ATTEMPT: Using importScripts inside Module Worker)

// 1. Setup the necessary URL (we still need this for Emscripten's inner workings
//    if it needs to resolve other assets, but we'll use a direct path for now).
const botJsURL = new URL("./bot.js", import.meta.url);
let t = null;

(async () => {
    try {
        console.log("Worker: Starting WASM module initialization...");

        // **THIS IS THE CORRECT LINE:** Use dynamic import()
        const botModuleExports = await import(botJsURL); 

        // Access the factory via the 'default' export (due to -s EXPORT_ES6=1)
        const BotModuleFactory = botModuleExports.default; 

        if (typeof BotModuleFactory !== 'function') {
            throw new Error("Factory not found as default export. Check emcc flags (-s EXPORT_ES6=1).");
        }
        
        t = await BotModuleFactory(); 
        
        console.log("✅ Worker: WASM module successfully loaded. Bot is ready.");

    } catch (error) {
        console.error("❌ FATAL WASM Initialization Error:", error);
    }
})();

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
