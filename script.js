let board = ['', '', '', '', '', '', '', '', '']; // O tabuleiro
let currentPlayer = 'X'; // Jogador atual (X ou O)
let gameOver = false;

// Função para renderizar o tabuleiro
function renderBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.textContent = cell;
        cellElement.onclick = () => makeMove(index);
        gameBoard.appendChild(cellElement);
    });
}

// Função para fazer uma jogada
function makeMove(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Alterna o jogador
        renderBoard();
    }
}

// Função para verificar se algum jogador ganhou
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} ganhou!`);
            gameOver = true;
            return;
        }
    }

    // Verifica empate
    if (!board.includes('')) {
        alert("Empate!");
        gameOver = true;
    }
}

// Função para reiniciar o jogo
function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
}

// Inicializa o tabuleiro
document.getElementById('restart-btn').addEventListener('click', restartGame);
renderBoard();
