const gameBoard = (() => {
  let myGameBoard = ['', '', '', '', '', '', '', '', ''];
  const squares = document.querySelector('.gameboard');
  const startBtn = document.getElementsByClassName('start')[0];
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  const gameflow = document.querySelector('.gameflow');
  gameflow.innerText = 'Enter names and hit start';
  const resetBtn = document.createElement('button');
  resetBtn.innerText = 'Play again?';
  resetBtn.classList.add('reset');
  squares.appendChild(resetBtn);
  let turn = 0;
  let player1;
  let player2;
  let gameOver = false;

  const winConditions = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (symbol) => {
    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (myGameBoard[a] === symbol && myGameBoard[b] === symbol && myGameBoard[c] === symbol) {
        gameOver = true;
        if (symbol === 'X') {
          gameflow.innerText = `${player1.name} wins!`;
          resetBtn.style.visibility = 'visible';
        } else {
          gameflow.innerText = `${player2.name} wins!`;
          resetBtn.style.visibility = 'visible';
          resetBtn.innerText = 'Play again?';
        }
      }
    }
    if (!gameOver && turn === 9) {
      gameflow.innerText = 'It\'s a tie!';
      resetBtn.style.visibility = 'visible';
    }
  };

  resetBtn.addEventListener('click', () => {
    myGameBoard = ['', '', '', '', '', '', '', '', ''];
    squares.childNodes.forEach((square) => (square.innerText = ''));
    turn = 0;
    gameOver = false;
    resetBtn.style.visibility = 'hidden';
    gameflow.innerText = "Let's play again!";
    resetBtn.innerText = 'Play again?';
  });

  startBtn.addEventListener('click', () => {
    if (player1Input.value == '' || player2Input.value == '') {
      gameflow.innerText = 'ENTER YO DAMN NAMES!';
    } else {
      startBtn.style.visibility = 'hidden';
      player1Input.style.visibility = 'hidden';
      player2Input.style.visibility = 'hidden';
      squares.style.visibility = 'visible';
      player1 = player(player1Input.value, 'X');
      player2 = player(player2Input.value, 'O');
      gameflow.innerText = 'Time to play!';
      document.getElementById('player1label').style.display = 'none';
      document.getElementById('player2label').style.display = 'none';
    }
  });

  myGameBoard.forEach((square, index) => {
    square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
    square.setAttribute('data-index', index);
    square.addEventListener('click', () => {
      if (gameOver === false) {
        if (turn === 0 || turn % 2 === 0 && square.innerText === '') {
          square.innerText = player1.symbol;
          myGameBoard[index] = player1.symbol;
          turn++;
          checkWinner(player1.symbol);
        } else if (turn !== 0 && turn % 2 !== 0 && square.innerText === '') {
          square.innerText = player2.symbol;
          myGameBoard[index] = player2.symbol;
          turn++;
          checkWinner(player2.symbol);
        }
        if (!gameOver && turn === 9) {
          gameflow.innerText = 'It\'s a tie!';
          resetBtn.style.visibility = 'visible';
        }
      }
    });
  });
})();
const player = (name, symbol) => ({ name, symbol });
