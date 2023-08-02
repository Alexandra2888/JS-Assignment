// Function to get the computer's play (Rock, Paper, or Scissors)
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to play a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
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

// Function to play the game
function game() {
    let playerScore = 0;
    let computerScore = 0;
    const roundsToWin = 5;

    for (let i = 0; i < roundsToWin; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);

        // Update scores
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game. Better luck next time!");
    } else {
        console.log("It's a tie! The game ended in a draw.");
    }
}

// Start the game
game();
