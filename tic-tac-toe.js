const gameBoard = (() => {
  const myGameBoard = ['x', 'x', 'o', 'x', 'x', 'x', 'o', 'x', 'x'];
  const turn = 0;

  const squares = document.querySelector('.gameboard');

  const player = (name, symbol) => ({ name, symbol });

  const player1 = player('Player1', 'X');
  const player2 = player('Player2', 'O');

  myGameBoard.forEach((square, index) => {
    square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = myGameBoard[index];
    squares.appendChild(square);
  });
})();
