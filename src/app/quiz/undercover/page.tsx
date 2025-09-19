"use client";

import { undercoverDaily } from "@/lib/data/undercover";
import { useState, useEffect } from "react";

export default function Undercover() {
  const [actors, setActors] = useState<typeof undercoverDaily.cast>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [stats, setStats] = useState<{ correct: number; wrong: number; missed: number } | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];

    if (undercoverDaily.date === today) {
      setActors(undercoverDaily.cast);

      // localStorage-dan oxu
      const savedData = localStorage.getItem("undercoverGame");
      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.date === today) {
          setSelected(parsed.selected || []);
          setStats(parsed.stats || null);
          setSubmitted(parsed.submitted || false);
        }
      }
    } else {
      setActors([]);
    }
  }, []);

  const handleSelect = (id: number) => {
    if (submitted) return; 
    let newSelected = [...selected];
    if (newSelected.includes(id)) {
      newSelected = newSelected.filter((item) => item !== id);
    } else {
      if (newSelected.length < 5) newSelected.push(id);
    }
    setSelected(newSelected);
  };

  const handleSubmit = () => {
    if (selected.length === 0) return;

    let correct = 0;
    let wrong = 0;
    let missed = 0;

    actors.forEach((actor) => {
      if (selected.includes(actor.id)) {
        if (!actor.isImpostor) wrong++;
        else correct++;
      } else {
        if (!actor.isImpostor) missed++;
      }
    });

    const newStats = { correct, wrong, missed };

    setStats(newStats);
    setSubmitted(true);

    // localStorage-ə yaz
    const today = new Date().toISOString().split("T")[0];
    localStorage.setItem(
      "undercoverGame",
      JSON.stringify({
        date: today,
        selected,
        stats: newStats,
        submitted: true,
      })
    );
  };

  return (
    <>
      <div className="undercover-wrapper">
        <div className="circle-layout">
          {actors.map((actor) => {
            let boxClass = "";
            if (selected.includes(actor.id)) {
              boxClass = !submitted ? "selected" : actor.isImpostor ? "wrong" : "correct";
            } else {
              if (submitted && !actor.isImpostor) boxClass = "missed";
            }

            return (
              <div
                key={actor.id}
                className={`card ${boxClass}`}
                onClick={() => handleSelect(actor.id)}
              >
                <img src={actor.img} alt={actor.name} />
                <span>{actor.name}</span>
              </div>
            );
          })}
        </div>

        <div className="center-text">
          {submitted && stats ? (
            <>
              <div className="stats">
                <h2 style={{ color: "white", marginBottom: "1rem" }}>Results</h2>
                <p style={{ color: "lime" }}>Correct: {stats.correct}</p>
                <p style={{ color: "red" }}>Wrong: {stats.wrong}</p>
                <p style={{ color: "gray" }}>Missed: {stats.missed}</p>
              </div>
              <div className="main-menu-link">
                <a href="/" className="button-link">
                  Go to Main Menu
                </a>
              </div>
            </>
          ) : (
            <>
              <p>The category is:</p>
              <div className="category">{actors[0]?.subject}</div>
              <p>
                Avoid the <span className="red">IMPOSTORS</span>
              </p>
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
