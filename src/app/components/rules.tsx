interface RulesProps {
  onStart: () => void;
}

export default function Rules({ onStart }: RulesProps) {
  return (
    <div className="rules-container">
      <div className="rules-content">
        <div className="rules-image">
          <img
            src="https://futbol-11.com/media/thumbnail/legacy.webp"
            alt="mystery player"
          />
        </div>

        <div className="rules-text">
          <h1>
            <span className="highlight">FUTBOL</span>{" "}
            <span className="number">11</span> LEGACY
          </h1>

          <p>
            Futbol Legacy challenges you to identify the mystery player (active
            or retired) based on the four clubs he’s played for.
          </p>

          <p>
            The rules begins by revealing one club. You can either make a guess
            or skip to see the next club. Guess correctly at any point, and you
            win!
          </p>

          <p>
            Once all four clubs are revealed, you’ll have one final chance to
            name the player.
          </p>
      <button onClick={onStart} className="start-btn">Start Game</button>
        </div>
      </div>

    </div>
  );
}
