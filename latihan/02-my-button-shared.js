// Step 0b — Sharing data (lifting state up).
// Ref: https://react.dev/learn#sharing-data-between-components
// Cara run: sama kayak 01, paste ke Sandpack di halaman itu.

import { useState } from "react";

// TODO(human): pindah state dari MyButton ke MyApp biar 2 tombol selalu sama.
// Syarat Done:
// - const [count, setCount] + handleClick ada di MyApp (bukan di MyButton)
// - MyApp passing <MyButton count={count} onClick={handleClick} /> 2x
// - MyButton cuma baca props, tidak punya useState sendiri
// - klik tombol mana pun => kedua tombol berubah bareng

export default function MyApp() {
  // tulis state + handler di sini
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  // tulis return button di sini (tanpa useState)
  return <button onClick={onClick}>Clicked {count} times</button>;
}
