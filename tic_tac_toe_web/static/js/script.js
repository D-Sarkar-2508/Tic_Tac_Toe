let currentPlayer = 1;
let p1Char = "";
let p2Char = "";
let board = ["", "", "", "", "", "", "", "", ""];
let lastMoveIndex = null;
let gameActive = true;

// Starts the game after symbol selection
function startGame(choice) {
    p1Char = choice;
    p2Char = (choice === "X") ? "O" : "X";
    document.getElementById('selection-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    createBoard();
}

// Generates the 3x3 grid dynamically
function createBoard() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id', `cell-${i}`);
        cell.addEventListener('click', () => handleCellClick(i));
        grid.appendChild(cell);
    }
}

// Handles user clicks on cells
function handleCellClick(index) {
    if (board[index] !== "" || !gameActive) return;

    const char = (currentPlayer === 1) ? p1Char : p2Char;
    board[index] = char;
    lastMoveIndex = index;

    const cell = document.getElementById(`cell-${index}`);
    cell.innerText = char;
    cell.style.color = (char === "X") ? "#ff4757" : "#2e86de";

    const winData = checkWinner(char);
    if (winData) {
        highlightWin(winData);
        showWinnerLabel(`🎉 Player ${currentPlayer} Wins! 🎉`);
    } else if (board.every(cell => cell !== "")) {
        showWinnerLabel("Result: Draw");
    } else {
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        document.getElementById('turn-indicator').innerText = `Player ${currentPlayer}'s Turn`;
    }
}

// Check for winning patterns
function checkWinner(char) {
    const patterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let p of patterns) {
        if (p.every(i => board[i] === char)) return p;
    }
    return null;
}

// Visual feedback for the winner
function highlightWin(indices) {
    indices.forEach(i => {
        document.getElementById(`cell-${i}`).classList.add('win-highlight');
    });
}

function showWinnerLabel(text) {
    gameActive = false;
    const label = document.getElementById('winner-label');
    label.innerText = text;
    label.classList.add('winner-animate');
    
    document.getElementById('undo-btn').classList.add('hidden');
    document.getElementById('restart-options').classList.remove('hidden');
}

// Undo Logic
function clearLastInput() {
    if (lastMoveIndex !== null && gameActive) {
        board[lastMoveIndex] = "";
        const cell = document.getElementById(`cell-${lastMoveIndex}`);
        cell.innerText = "";
        cell.classList.remove('win-highlight');
        
        currentPlayer = (currentPlayer === 1) ? 2 : 1;
        document.getElementById('turn-indicator').innerText = `Player ${currentPlayer}'s Turn`;
        lastMoveIndex = null;
    } else {
        alert("No input to clear!");
    }
}

// Final Screen
function endMatch() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
}