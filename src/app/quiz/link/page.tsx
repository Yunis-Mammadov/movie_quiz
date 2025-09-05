"use client";

import Rules from "@/app/components/rules";
import { useState } from "react";

export default function Link() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!started ? (
        <Rules onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1>Link Game</h1>
          <p>Bu oyun üçün fərqli komponentlər və logika burada olacaq.</p>
        </div>
      )}
    </div>
  );
}
