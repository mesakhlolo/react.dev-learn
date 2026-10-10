# Belajar React — react.dev/learn only. KISS.

> Urutan = urutan sidebar react.dev/learn. Jangan loncat.
> Aturan Done per halaman: baca + kerjakan semua **Challenges** di bawah halaman itu sampai bisa tanpa contekan.

## Step 0 — Quick Start (pondasi) ✅ DONE

Link: https://react.dev/learn
Belajar: component, JSX, props, conditional, list, state, lifting.
Bukti: `latihan/01-my-button.js`, `latihan/02-my-button-shared.js`

## Step 1 — Tutorial: Tic-Tac-Toe

Link: https://react.dev/learn/tutorial-tic-tac-toe
3 bagian: Overview (Board 9 kotak + props) → Completing the game (lifting + giliran X/O + winner) → Time travel (history).
Done: game jadi di Sandpack + bisa jelasin kenapa pakai `slice()` bukan mutasi langsung. Bukti: `latihan/03-*.js`

## Step 2 — Thinking in React

Link: https://react.dev/learn/thinking-in-react
Done: bisa pecah UI jadi komponen + tentuin state ditaruh di mana.

## Step 3 — Describing the UI

Link: https://react.dev/learn/describing-the-ui
Isi (9): first component, import/export, JSX, curly braces, props, conditional, lists, pure, UI as tree.
Done: paham beda props vs state, bisa render list pakai `key` yang benar.

## Step 4 — Adding Interactivity

Link: https://react.dev/learn/adding-interactivity
Isi (7): events, useState, render-commit, snapshot, queueing, update object, update array.
Done: paham immutability + snapshot. Ini bagian paling sering bikin bug.

## Step 5 — Managing State

Link: https://react.dev/learn/managing-state
Isi (7): reacting to input, struktur state, lifting, preserve/reset, reducer, context, reducer+context.
Done: bisa pilih kapan lifting vs context vs reducer tanpa over-engineering.

## Step 6 — Escape Hatches (Lulus)

Link: https://react.dev/learn/escape-hatches
Isi (9): refs, DOM refs, effects, you-might-not-need-effect, lifecycle, events vs effects, deps, custom hooks.
Done: bisa jelaskan kapan **tidak** butuh useEffect. Kalau ini lolos = lulus mental model React.

---

Cara pakai: 1 hari = 1 halaman. KISS.
