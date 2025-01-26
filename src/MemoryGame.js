import React, { useState, useEffect } from "react";

// Fonction pour générer les couleurs
const generateCards = (size) => {
  const colors = [
    "#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33A6FF",
    "#FF9F33", "#9FFF33", "#33FF9F", "#9F33FF", "#FF33FF",
    "#FF8C00", "#8CFF00", "#00FF8C", "#8C00FF", "#00FF33",
    "#33FF00"
  ];

  const selectedColors = colors.slice(0, size / 2);
  return [...selectedColors, ...selectedColors].sort(() => Math.random() - 0.5);
};

const MemoryGame = ({ gameMode }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setCards(generateCards(gameMode));
    setMatched([]);
    setMoves(0);
  }, [gameMode]);

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

    setFlipped((prev) => [...prev, index]);

    if (flipped.length === 1) {
      setMoves((prev) => prev + 1);
      const firstCard = cards[flipped[0]];
      const secondCard = cards[index];

      if (firstCard === secondCard) {
        setMatched((prev) => [...prev, flipped[0], index]);
      }

      setTimeout(() => setFlipped([]), 1000);
    }
  };

  useEffect(() => {
    if (matched.length === cards.length) {
      const endTime = Date.now();
      const gameDuration = Math.floor((endTime - startTime) / 1000); 
      const gameHistory = JSON.parse(localStorage.getItem("memoryGameHistory")) || [];
      const gameData = {
        mode: gameMode,
        moves,
        time: gameDuration,
        date: new Date().toLocaleString(),
      };

      gameHistory.push(gameData);
      localStorage.setItem("memoryGameHistory", JSON.stringify(gameHistory));
    }
  }, [matched, cards, gameMode, moves, startTime]);

  const history = JSON.parse(localStorage.getItem("memoryGameHistory")) || [];

  return (
    <div>
      <div className={`memory-game mode-${gameMode}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${flipped.includes(index) || matched.includes(index) ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundColor: flipped.includes(index) || matched.includes(index) ? card : "#D3D3D3",
              borderRadius: "5px",
              width: "100px",
              height: "100px",
              display: "inline-block",
              margin: "5px",
              textAlign: "center",
              lineHeight: "100px",
              fontSize: "24px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {!(flipped.includes(index) || matched.includes(index)) && <div style={{ fontSize: "30px" }}>?</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
