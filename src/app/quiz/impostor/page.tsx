"use client";

import Rules from "@/app/components/rules/rules";
import { useState } from "react";

export default function Impostor() {
  const [started, setStarted] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      {!started ? (
        <Rules onStart={() => setStarted(true)} />
      ) : (
        <div>
          <h1>Impostor Game</h1>
          <p>Bu oyun tam fərqli strukturda işləyir.</p>
        </div>
      )}
    </div>
  );
}
