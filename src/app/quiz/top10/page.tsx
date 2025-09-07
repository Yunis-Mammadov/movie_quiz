"use client";

import Rules from "@/app/rules/whobox";
import { useState } from "react";

export default function Top10() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!started ? (
        <Rules onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1>Top10 Game</h1>
          <p>Bu oyun üçün fərqli komponentlər və logika burada olacaq.</p>
        </div>
      )}
    </div>
  );
}
