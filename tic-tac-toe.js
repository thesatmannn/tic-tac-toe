const gameBoard = (() => {
  const myGameBoard = ['', '', '', '', '', '', '', '', ''];
  const squares = document.querySelector('.gameboard');
  let turn = 0;

  myGameBoard.forEach((square) => {
    square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
    square.addEventListener('click', () => {
      if (turn === 0 || turn % 2 === 0 && square.innerText === '') {
        square.innerText = player1.symbol;
        turn++;
      } else if (turn !== 0 && turn % 2 !== 0 && square.innerText === '') {
        square.innerText = player2.symbol;
        turn++;
      }
    });
  });
})();

const player = (name, symbol) => ({ name, symbol });

const player1 = player(document.getElementById('player1').value, 'X');
const player2 = player(document.getElementById('player2').value, 'O');
