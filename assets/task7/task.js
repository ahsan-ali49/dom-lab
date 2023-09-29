// 7.Create a Tic Tac Toe game with two players.
const boardArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let currentPlayer = "X";

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (box.textContent === "" && currentPlayer === "X") {
      box.style.color = "red";
      box.textContent = currentPlayer;
      boardArray[index] = currentPlayer;
      currentPlayer = "O";
    } else if (box.textContent === "" && currentPlayer === "O") {
      box.textContent = currentPlayer;
      boardArray[index] = currentPlayer;
      currentPlayer = "X";
    }
    console.log(boardArray);
  });
});
