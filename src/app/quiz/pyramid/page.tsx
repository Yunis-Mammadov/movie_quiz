"use client";

import Rules from "@/app/components/rules/rules";
import { useState } from "react";

export default function Pyramid() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!started ? (
        <Rules onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1>Pyramid Game</h1>
          <p>Bu oyun üçün fərqli komponentlər və logika burada olacaq.</p>
        </div>
      )}
    </div>
  );
}
