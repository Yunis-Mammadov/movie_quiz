"use client";

import Rules from "@/app/components/rules/rules";
import { useState } from "react";

export default function Connections() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!started ? (
        <Rules onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1>Connections Game</h1>
          <p>Bu oyun tam fərqli strukturda işləyir.</p>
        </div>
      )}
    </div>
  );
}
