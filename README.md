# 🎮 Tic-Tac-Toe Modern

A sleek, responsive, and modern Tic-Tac-Toe web application built with **Flask** and **Docker**. This project features a player vs. player mode with symbol selection and a "Clear Wrong Input" (Undo) functionality.

---

## 🚀 Live Demo
You can try the live application hosted on Hugging Face Spaces here:

### **👉 [Click Here to Open the App](https://huggingface.co/spaces/coder-diya/tic-tac-toe)**

---

## ✨ Features
* **Symbol Selection:** Player 1 can choose to play as **X** or **O**.
* **Turn Indicator:** Real-time updates on whose turn it is.
* **Smart Logic:** Automatically detects wins, losses, and draws.
* **Undo Function:** Includes a "Clear Wrong Input" button to fix accidental clicks.
* **Modern UI:** Clean, centered container with a modern aesthetic.
* **Fully Responsive:** Works on desktop, tablets, and mobile phones.

## 🛠️ Tech Stack
* **Backend:** Python (Flask)
* **Frontend:** HTML5, CSS3, JavaScript
* **Deployment:** Docker, Hugging Face Spaces
* **Version Control:** Git & GitHub

## 📂 Project Structure
```text
.
├── app.py              # Flask Application logic
├── Dockerfile          # Container configuration for deployment
├── requirements.txt    # Python dependencies (Flask)
├── static/
│   ├── css/style.css   # Modern styling and layout
│   └── js/script.js    # Game logic and symbol handling
└── templates/
    └── index.html      # Main game interface
