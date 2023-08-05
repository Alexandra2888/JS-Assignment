//function for starting the computer's play (Rock, Paper, or Scissors)
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// play a single round of the game
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie! Both players chose " + playerSelection;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

// play game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const roundsToWin = 5;

    for (let i = 0; i < roundsToWin; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        // Update score for players
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    // check the winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie! The game ended in a draw.");
    }
}

// Start game
playGame();
