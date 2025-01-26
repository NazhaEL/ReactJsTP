import React from "react";

const History = () => {
  const history = JSON.parse(localStorage.getItem("memoryGameHistory")) || [];

  return (
    <div>
      <h2>Game History</h2>
      {history.length === 0 ? (
        <p>No games played yet.</p>
      ) : (
        <ul>
          {history.map((game, index) => (
            <li key={index}>
              Mode: {game.mode} cards, Moves: {game.moves}, Time: {game.time}s
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
