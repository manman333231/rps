const choices = ["rock", "paper", "scissors"];

let random = 0, humanChoice = null, computerChoice = null, humanScore = 0, computerScore = 0;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

const hScore = document.querySelector("#hScore");
const cScore = document.querySelector("#cScore");

btn1.addEventListener("click", () => {
  humanChoice = "rock";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

btn2.addEventListener("click", () => {
  humanChoice = "paper";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

btn3.addEventListener("click", () => {
  humanChoice = "scissors";
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

/* old function without the ui
 
function getHumanChoice() {
	humanChoice = prompt("rock paper or scissors? ");
	while (humanChoice === null || !choices.includes(humanChoice.toLowerCase())) {
		humanChoice = prompt("rock paper or scissors? ");
		if (humanChoice === null) {
			break;
		}
	}

	return humanChoice;
}

*/

function getComputerChoice() {
	random = Math.random();
	if (random < 0.33) {
		return choices[0];
	} else if (random < 0.66) {
		return choices[1];
	} else {
		return choices[2];
	}
}

function playRound(humanchoice, computerchoice) {
	if (humanchoice == computerchoice) {
		alert("Tie!");
	} else if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	 ) {
		alert("You win! " + humanChoice + " beats " + computerChoice);
		humanScore++;
	} else {
		alert("You lose! " + computerChoice + " beats " + humanChoice);
		computerScore++;
	}
  hScore.textContent = humanScore;
  cScore.textContent = computerScore;
  if(humanScore == 5) {
    alert("You are the winner!!!!!!");
    btn1.removeEventListener("click", e);
    btn2.removeEventListener("click", e);
    btn3.removeEventListener("click", e);
  }
  if(computerScore == 5) {
    alert("You are the loser noooo!!!!!!");
    btn1.removeEventListener("click", e);
    btn2.removeEventListener("click", e);
    btn3.removeEventListener("click", e);
  }
}


