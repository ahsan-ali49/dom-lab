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
      checkForWin(boardArray, currentPlayer);
      currentPlayer = "O";
    } else if (box.textContent === "" && currentPlayer === "O") {
      box.textContent = currentPlayer;
      boardArray[index] = currentPlayer;
      checkForWin(boardArray, currentPlayer);
      currentPlayer = "X";
    }
    // console.log(boardArray);
  });
});

const winningCombinations = [
  [0, 1, 2], // Horizontal Top Row
  [3, 4, 5], // Horizontal Middle Row
  [6, 7, 8], // Horizontal Bottom Row
  [0, 3, 6], // Vertical Left Column
  [1, 4, 7], // Vertical Middle Column
  [2, 5, 8], // Vertical Right Column
  [0, 4, 8], // Diagonal from Top Left to Bottom Right
  [2, 4, 6], // Diagonal from Top Right to Bottom Left
];

const checkForWin = (checkBoard, player) => {
  console.log(checkBoard);
  for (combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      checkBoard[a] === player &&
      checkBoard[b] === player &&
      checkBoard[c] === player
    ) {
      alert(`User ${player} Wins!`);
    }
  }
};

const restartButton = document.querySelector("button");
restartButton.addEventListener("click", () => {
  location.reload();
});
