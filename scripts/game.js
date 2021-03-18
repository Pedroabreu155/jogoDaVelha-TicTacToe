//THIS FILE IS RESPONSABLE TO CONTROL THE GAME FUNCTIONS
// AND SERVICES RULES

//NAMING VARIABLES
let board = ["", "", "", "", "", "", "", "", ""];

let playerTime = 0;

let symbols = ["o", "x"];

let gameOver = false;

//game functions

function handleMove(position) {
  //making the game over

  if (gameOver) {
    return;
  }

  // this if is to control the squares
  // you cannot put same symbol on same square
  if (board[position] == "") {
    board[position] = symbols[playerTime];
    
    
    //verifying if has a winner
    gameOver = isWin()

    //changing the player time

    if (playerTime == 0) {
      playerTime = 1;
    } else {
      playerTime = 0;
    }
  }
}


function isWin(){
    let winStates = [
        //this sub arrays presents the position on the board that
        //refers to a win on the game rules
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ] 

    for(let i = 0; i < winStates.length; i++){
        //reading the wins alternatives
        let sequence = winStates[i]

        //naming positions
        let pos1 = sequence[0]
        let pos2 = sequence[1]
        let pos3 = sequence[2]

        //declaring the winner
        if(board[pos1] == board[pos2] && 
            board[pos1] == board[pos3]){
                return true
            }
    }

    return false
}
