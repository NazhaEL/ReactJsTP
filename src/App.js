import React, { useState } from "react";
import MemoryGame from "./MemoryGame";
import Menu from "./Menu";
import History from "./History";
import "./App.css";

const App = () => {
  const [gameMode, setGameMode] = useState(4);
  const [background, setBackground] = useState("lightblue");

  const handleModeChange = (mode) => setGameMode(mode);
  const handleBackgroundChange = (color) => setBackground(color);

  return (
    <div className="app" style={{ background }}>
      <header>
        <h1>Memory Card Game</h1>
      </header>

      <div className="menu-section">
          <Menu
            onModeChange={handleModeChange}
            onBackgroundChange={handleBackgroundChange}
          />
        </div>

      <div className="main-content">
        <div className="game-section">
          <MemoryGame gameMode={gameMode} />
        </div>

        <div className="history-section">
          <History />
        </div>
      </div>
    </div>
  );
};

export default App;
