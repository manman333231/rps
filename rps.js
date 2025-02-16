const choices = ["rock", "paper", "scissors"];
let random = 0, humanChoice = null, computerChoice = null, humanScore = 0, computerScore = 0;

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
		console.log("Tie!");
	} else if (
		(humanChoice == "rock" && computerChoice == "scissors") ||
		(humanChoice == "paper" && computerChoice == "rock") ||
		(humanChoice == "scissors" && computerChoice == "paper")
	 ) {
		console.log("You win! " + humanChoice + " beats " + computerChoice);
		humanScore++;
	} else {
		console.log("You lose! " + computerChoice + " beats " + humanChoice);
		computerScore++;
	}

	console.log("Score: You " + humanScore + " Computer " + computerScore);
}

for (let i = 0; i <= 4; i++) {
	humanChoice = getHumanChoice();
	computerChoice = getComputerChoice();
	playRound(humanChoice, computerChoice);
}

if (humanScore > computerScore ) {
	console.log("You won the game!");
} else {
	console.log("You lost the game!");
}
