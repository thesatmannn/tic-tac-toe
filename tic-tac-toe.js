const gameBoard = (() => {
  const myGameBoard = ['', '', '', '', '', '', '', '', ''];
  const squares = document.querySelector('.gameboard');
  const startBtn = document.getElementsByClassName('start')[0];
  const player1Input = document.getElementById('player1');
  const player2Input = document.getElementById('player2');
  const gameflow = document.querySelector('.gameflow');
  gameflow.innerText = 'Enter names and hit start';
  let turn = 0;
  let player1;
  let player2;

  startBtn.addEventListener('click', () => {
    if (player1Input.value == '' || player2Input.value == '') {
      gameflow.innerText = 'ENTER YO DAMN NAMES!';
    } else {
      startBtn.style.visibility = 'hidden';
      player1Input.style.visibility = 'hidden';
      player2Input.style.visibility = 'hidden';
      squares.style.visibility = 'visible';
      player1 = player(player1Input.value, 'X'); // Update to get input value for player1
      player2 = player(player2Input.value, 'O'); // Update to get input value for player2
      gameflow.innerText = `${player1.name}'s turn!`;
      document.getElementById('player1label').style.display = 'none';
      document.getElementById('player2label').style.display = 'none';
      gameflow.style.marginBotton = '0px';
    }
  });

  myGameBoard.forEach((square) => {
    square = document.createElement('div');
    square.className = 'square';
    squares.appendChild(square);
    square.addEventListener('click', () => {
      if (turn === 0 || turn % 2 === 0 && square.innerText === '') {
        square.innerText = player1.symbol;
        turn++;
        gameflow.innerText = `${player2.name}'s turn!`;
      } else if (turn !== 0 && turn % 2 !== 0 && square.innerText === '') {
        square.innerText = player2.symbol;
        turn++;
        gameflow.innerText = `${player1.name}'s turn!`;
      }
    });
  });
})();

const player = (name, symbol) => ({ name, symbol });
