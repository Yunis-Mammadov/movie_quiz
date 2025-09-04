interface RulesProps {
  onStart: () => void;
}

export default function Rules({ onStart }: RulesProps) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Game Rules</h2>
      <ul>
        <li>Answer questions correctly to score points.</li>
        <li>Follow the time limits.</li>
        <li>Enjoy the game!</li>
      </ul>
      <button onClick={onStart}>Start Game</button>
    </div>
  );
}
