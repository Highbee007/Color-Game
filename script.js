const colorBox = document.getElementById("colorBox");
const options = document.querySelectorAll(".color-option");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let targetColor;
let score = 0;

function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function setGame() {
  let colors = [];
  targetColor = generateRandomColor();
  colorBox.style.backgroundColor = targetColor;

  let correctIndex = Math.floor(Math.random() * options.length);

  options.forEach((button, index) => {
    let color = index === correctIndex ? targetColor : generateRandomColor();
    button.style.backgroundColor = color;
    button.onclick = () => checkGuess(color);
  });
}

function checkGuess(color) {
  if (color === targetColor) {
    gameStatus.textContent = "Correct!";
    score++;
    scoreDisplay.textContent = score;
    setGame();
  } else {
    gameStatus.textContent = "Wrong! Try again.";
  }
}

newGameButton.addEventListener("click", () => {
  gameStatus.textContent = "";
  score = 0;
  scoreDisplay.textContent = score;
  setGame();
});

setGame();
