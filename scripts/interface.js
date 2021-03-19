//THIS FILE IS RESPONSABLE TO CONTROL THE INTERFACE
// AND THE CHANGES ON HTML

document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  // test log
  // console.log(event.target)

  let square = event.target;
  let position = square.id;

  if(handleMove(position)){

    //fixing the alert before the last playertime

    setTimeout(()=>{
      alert("O jogo acabou!")

    }, 30)
    

  }

  updateSquare(position);


}

function updateSquare(position){
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class= '${symbol}'></div>`

}



// function updateSquares() {
//     let squares = document.querySelectorAll(".square");

//   squares.forEach((square) => {
//         let position = square.id
//         let symbol = board[position]

//         if(symbol != ''){
//             square.innerHTML = `<div class= '${symbol}'></div>`
//         }


//     });
// }
