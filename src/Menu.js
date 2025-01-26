import React from "react";

const Menu = ({ onModeChange, onBackgroundChange }) => {
  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>Game Mode:</label>
        <button onClick={() => onModeChange(4)}>4 Cards</button>
        <button onClick={() => onModeChange(16)}>16 Cards</button>
        <button onClick={() => onModeChange(32)}>32 Cards</button>
      </div>
      <div>
        <label>Background:</label>
        <button onClick={() => onBackgroundChange("lightblue")}>Light Blue</button>
        <button onClick={() => onBackgroundChange("lightgreen")}>Light Green</button>
        <button onClick={() => onBackgroundChange("lightpink")}>Light Pink</button>
      </div>
    </div>
  );
};

export default Menu;
