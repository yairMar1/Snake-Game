# 🐍 Snake Game

A simple and clean Snake game built using **HTML**, **JavaScript**.
The game includes smooth snake movement, random food generation, score tracking, and self collision detection.

---

## 📂 Project Structure
- **index.html** – Defines the game layout and displays the canvas and score.
- **script.js** – Contains all game logic: movement, drawing, collisions, and food handling.
---

## 🎮 How to Play
- Use the arrow keys to control the snake:  
  **⬅️ Left | ➡️ Right | ⬆️ Up | ⬇️ Down**
- Eat the red food squares to increase your score.
- If the snake collides with itself, the game resets and the score returns to zero.

---

## 🚀 How to Run
1. Download or clone the project.
2. Open **index.html** in your browser.
3. Enjoy the game!

---

## 🧠 Game Logic Overview
- The snake moves by updating its head position every 300ms.
- The board is based on a 20×20 grid, using wrap-around movement via modulo.
- Food appears at random grid positions after each successful eat.
- If the new head overlaps with any part of the snake's body, the game restarts.

---
