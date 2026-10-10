// Step 0 — Bukti Quick Start selesai.
// Ref: https://react.dev/learn#updating-the-screen
// Cara run: copy isi file ini ke https://react.dev/learn (Sandpack) — belum perlu setup lokal, KISS.

import { useState } from "react";

// TODO(human): bikin MyButton yang punya state count sendiri.
// Syarat Done (5-10 baris inti):
// - useState(0) di dalam MyButton, bukan di App
// - klik => count + 1
// - teks: "Clicked {count} times"
// - App render 2x <MyButton /> dan tiap tombol ingat count masing-masing (jangan di-lifting!)

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

export function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}
