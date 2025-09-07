"use client";
import { useState, useEffect } from "react";
import { dailyWhoboxGames } from "@/lib/data/base";
import { tomorrow } from "@/lib/fonts/fonts";

export default function Whobox() {
  const [game, setGame] = useState({
    date: "",
    correctAnswer: "",
    correctImage: "",
    cards: [],
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const todayGame = dailyWhoboxGames.find((g) => g.date === today) || dailyWhoboxGames[0];
    setGame(todayGame);

    const storedAnswer = localStorage.getItem(`whobox-${today}`);
    if (storedAnswer) {
      const correct = storedAnswer === "true";
      setAnswered(true);
      setIsCorrect(correct);
      setCurrentIndex(todayGame.cards.length - 1);
    }
  }, []);

  const checkAnswer = () => {
    if (answered) return;

    const correct = inputValue.trim().toLowerCase() === game.correctAnswer.toLowerCase();
    const nextIndex = currentIndex + 1;
    const today = new Date().toISOString().split("T")[0];

    if (correct) {
      setIsCorrect(true);
      setAnswered(true);
      setCurrentIndex(game.cards.length - 1);
      localStorage.setItem(`whobox-${today}`, "true");
    } else {
      if (nextIndex >= game.cards.length) {
        // Son kart açıldı və cavab tapılmadı
        setAnswered(true);
        setIsCorrect(false);
        setCurrentIndex(game.cards.length - 1);
        localStorage.setItem(`whobox-${today}`, "false");
      } else {
        setCurrentIndex(nextIndex);
      }
    }

    setInputValue("");
  };

  return (
    <div className={`whobox-container ${tomorrow.className}`}>
      <div className="whobox-section1">
        <div className={`question ${answered ? (isCorrect ? "flipped correct" : "wrong flipped") : ""}`}>
          <div className="inner">
            <div className="front">?</div>
            <div className="back">
              {game.correctImage && <img src={game.correctImage} alt="Correct" />}
            </div>
          </div>
        </div>

        <div>
          {answered ? (
            isCorrect ? (
              <p className="whobox-desc">🎉 You guessed it! I am {game.correctAnswer}!</p>
            ) : (
              <p className="whobox-desc">❌ No more guesses! The correct answer was {game.correctAnswer}.</p>
            )
          ) : (
            <p>I played for these 4 films. Who am I?</p>
          )}
        </div>
      </div>

      <div className="whobox-section2">
        <div className="whobox-cards">
          {game.cards.map((img, i) => (
            <div key={i} className={`card ${i <= currentIndex ? "flipped" : ""}`}>
              <div className="inner">
                <div className="front">{i + 1}</div>
                <div className="back">
                  <img src={img} alt={`Movie ${i + 1}`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="whobox-input">
          {!answered ? (
            <>
              <input
                className={tomorrow.className}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type actor name..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") checkAnswer();
                }}
              />
              <div className="buttons">
                <button onClick={checkAnswer}>Check</button>
              </div>
            </>
          ) : (
            <div className="main-menu-link">
              <a href="/" className="button-link">
                Go to Main Menu
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
