//THIS FILE IS RESPONSABLE TO CONTROL THE GAME FUNCTIONS
// AND SERVICES RULES

//NAMING VARIABLES
let board = ["", "", "", "", "", "", "", "", ""];

let playerTime = 0;

let symbols = ["o", "x"];

//game functions

function handleMove(position) {
  board[position] = symbols[playerTime];

  if (playerTime == 0) {
    playerTime = 1;
  } else {
    playerTime = 0;
  }
}
