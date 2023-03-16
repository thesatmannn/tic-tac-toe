const gameBoard = (() => {
     const myGameBoard = [];
})();

const player = (name, symbol) => ({name , symbol});

const player1 = player("Player X", "X");
const player2 = player("Player O", "O");

const gamePlay = () => {

}


const createGameBoard = function () {
    const boardDisplay = document.getElementsByClassName("gameboard");

    for( let i = 0; i < 9; i++) {
        const square = boardDisplay.createElement("div");
        square.classList.add("square");
        boardDisplay.appendChild(square);

        


    }
}

 

