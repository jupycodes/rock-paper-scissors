function generateRandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}


function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = generateRandomInteger(0,2);
    return choices[choice];
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    let winner = "";

    if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
                winner = "player";
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if ((computerSelection == "rock" && playerSelection == "scissors") ||
            (computerSelection == "paper" && playerSelection == "rock") ||
            (computerSelection == "scissors" && playerSelection == "paper")) {
                winner = "computer";
                console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
                console.log("It's a tie!");
    } 
    return winner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1
    
    while (round < 6) {
        console.log(`Round ${round} of 5`)
        let winner = playRound();
        if (winner == "player") {
            playerScore++;
            round++;
        } else if (winner == "computer") {
            computerScore++;
            round++;
        }
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }
    
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else {
        console.log("Uh oh, you lost! :(");
    }

}

console.log(game());