const gameBoard = (() => {
     const myGameBoard = [];
     const turn = 0;

     for(i = 0; i < 9; i++) {
        myGameBoard.push("");
     }
 
     const squares = document.querySelector(".gameboard");

     myGameBoard.forEach((item, index) => {
        const square = document.createElement("div");
        square.className = "square";
        squares.appendChild(square);
     })
   

})();

const player = (name, symbol) => ({name, symbol});

const player1 = player("Player1", "X");
const player2 = player("Player2", "O");

