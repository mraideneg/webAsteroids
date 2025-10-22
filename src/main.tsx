import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";        // Bot-controlled
import BaseApp from "./baseApp"; // Human-controlled
import "./index.css";

const root = createRoot(document.getElementById("root")!);

root.render(
  <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
    <div><h2>Human</h2><BaseApp /></div>
    <div><h2>Bot</h2><App /></div>
  </div>
);
