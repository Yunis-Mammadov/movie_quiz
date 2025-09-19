"use client";

import { pyramidDaily } from "@/lib/data/pyrmaid";
import { useState, useEffect } from "react";

export default function PyramidGame() {
  const [currentActor, setCurrentActor] = useState<any>(null);
  const [revealed, setRevealed] = useState<Record<number, { img: string; actorId: number; count: number }>>({});
  const [usedActors, setUsedActors] = useState<number[]>([]);
  const [subject, setSubject] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (pyramidDaily.cast.length > 0) {
      setSubject(pyramidDaily.cast[0].subject);
      getRandomActor([]);
    }
  }, []);

  // Təkrarsız random actor seçmək
  const getRandomActor = (used: number[]) => {
    const remaining = pyramidDaily.cast.filter((a) => !used.includes(a.id));
    if (remaining.length === 0) {
      setCurrentActor(null);
      return;
    }
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentActor(random);
  };

  const handleClick = (cardId: number) => {
    if (!currentActor || revealed[cardId]) return;

    setRevealed((prev) => ({
      ...prev,
      [cardId]: {
        img: currentActor.img,
        actorId: currentActor.id,
        count: currentActor.count || 0
      },
    }));

    setUsedActors((prev) => {
      const newUsed = [...prev, currentActor.id];
      getRandomActor(newUsed);
      return newUsed;
    });
  };

  const handleSubmit = () => {
    setShowResults(true);

    // yoxla bütün cardlar doğru seçilibmi
    const allCorrect = Object.entries(revealed).every(
      ([cardId, data]) => Number(cardId) === data.actorId
    );

    if (allCorrect) setSuccess(true);
  };

  const allCardsFilled = Object.keys(revealed).length === 10;

  return (
    <div className="pyramid-wrapper">
      <div className="category">{subject}</div>

      <div className="pyramid">
        <div className="row">
          <Card id={1} revealed={revealed[1]} showResults={showResults} onClick={handleClick} />
        </div>
        <div className="row">
          <Card id={2} revealed={revealed[2]} showResults={showResults} onClick={handleClick} />
          <Card id={3} revealed={revealed[3]} showResults={showResults} onClick={handleClick} />
        </div>
        <div className="row">
          <Card id={4} revealed={revealed[4]} showResults={showResults} onClick={handleClick} />
          <Card id={5} revealed={revealed[5]} showResults={showResults} onClick={handleClick} />
          <Card id={6} revealed={revealed[6]} showResults={showResults} onClick={handleClick} />
        </div>
        <div className="row">
          <Card id={7} revealed={revealed[7]} showResults={showResults} onClick={handleClick} />
          <Card id={8} revealed={revealed[8]} showResults={showResults} onClick={handleClick} />
          <Card id={9} revealed={revealed[9]} showResults={showResults} onClick={handleClick} />
          <Card id={10} revealed={revealed[10]} showResults={showResults} onClick={handleClick} />
        </div>
      </div>

      {currentActor && !allCardsFilled && (
        <div className="next-player">
          Next player: <span>{currentActor?.name}</span>
        </div>
      )}

      {allCardsFilled && !showResults && (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      )}


      {allCardsFilled && showResults && !success && (
        <p style={{marginTop:"2.5rem"}}>You lost. Come back again tomorrow.</p>
      )}

      {success && (
        <div  style={{marginTop:"2.5rem"}}>
          🎉 Congratulations! All correct!
        </div>
      )}
    </div>
  );
}

function Card({ id, revealed, showResults, onClick }: any) {
  let bg = "#0f1f3a"; // default background

  // Submit zamanı rəngi təyin et
  if (showResults && revealed) {
    bg = revealed.actorId === id ? "limegreen" : "crimson";
  }

  return (
    <div
      className="card"
      style={{
        position: "relative",
        background: bg,
        borderRadius: "8px",
        cursor: revealed ? "default" : "pointer"
      }}
      onClick={() => onClick(id)}
    >
      {/* Künc rəqəmi */}
      {showResults && revealed && (
        <div className="card-count">
          {revealed.count}
        </div>
      )}

      {revealed ? (
        <img
          src={revealed.img}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      ) : (
        id
      )}
    </div>
  );
}
