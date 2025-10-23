import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";        // Bot-controlled
import BaseApp from "./baseApp"; // Human-controlled
import "./index.css";

function Root() {
  const [humanAlive, setHumanAlive] = useState(true);
  const [botAlive, setBotAlive] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <div className="container">
      <h1 className="main-title">BEAT THE BOT</h1>
      <div className="games-container">
        <div className="game-column">
          <h2 className="game-title">YOU</h2>
          <BaseApp 
            announceHumanCollision={() => {
              setHumanAlive(false);
              setGameStarted(false);
            }} 
            announceGameStart={() => {
              setHumanAlive(true);
              setGameStarted(true);
              console.log(" Game Started ");
              setBotAlive(true)}}

          />
        </div>
        <div className="game-column">
          <h2 className="game-title">BOT</h2>
          <App 
            gameStarted={gameStarted}
            announceBotCollision={() => {
              setBotAlive(false)}}
          />
        </div>
      </div>
      {!gameStarted && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
            fontFamily: "Consolas, monospace",
            color: "#ffffff"
          }}
        >
          Press Enter to Start
        </div>
      )}
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Root />
  </StrictMode>
);