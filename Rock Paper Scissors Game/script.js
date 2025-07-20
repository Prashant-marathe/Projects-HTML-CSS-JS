const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("com-score");

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    resultEl.innerText = playRound(button.id, computerPlay());
    userScoreEl.innerText = userScore;
    computerScoreEl.innerText = computerScore;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissor"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a Tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    userScore++;
    return "You Won! " + playerChoice + " beats " + computerChoice + "!";
  } else {
    computerScore++;
    return "You Lose! " + computerChoice + " beats " + playerChoice + "!";
  }
}
