let computerChoiceDisplay = document.getElementById('computer-choice');
let playerChoiceDisplay = document.getElementById('player-choice');
let computerScoreDisplay = document.getElementById('computer-score');
let playerScoreDisplay = document.getElementById('player-score');
let resultDisplay = document.getElementById('result');
let possibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let roundResult;
let playerScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    playerChoiceDisplay.innerHTML = `You chose ${playerChoice}`;
    computerPlay();
    playRound();
    game()
}))

function generateRandomInteger(min, max) {
    return Math.floor(Math.random()*(max-min+1))+min;
}
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = generateRandomInteger(0,2);
    computerChoice = choices[choice];
    computerChoiceDisplay.innerHTML = `The computer chose ${computerChoice}`;
}

function playRound() {
    if ((playerChoice == "rock" && computerChoice == "scissors") ||
            (playerChoice == "paper" && computerChoice == "rock") ||
            (playerChoice == "scissors" && computerChoice == "paper")) {
                roundResult = "player";
                playerScore ++;
                resultDisplay.innerHTML = `${roundResult} wins!`;
    } else if ((computerChoice == "rock" && playerChoice == "scissors") ||
            (computerChoice == "paper" && playerChoice == "rock") ||
            (computerChoice == "scissors" && playerChoice == "paper")) {
                roundResult = "computer";
                computerScore ++
                resultDisplay.innerHTML = `${roundResult} wins!`;
    } else {
                resultDisplay.innerHTML = "It's a tie!";
    }
    playerScoreDisplay.innerHTML = `Player score: ${playerScore}`
    computerScoreDisplay.innerHTML = `Computer score: ${computerScore}`
};

document.getElementById("refresh-button").style.visibility = "hidden";

let winnerAnnouncement = document.getElementById('winner-announcement')
function game(){

    if (playerScore == 5){
        winnerAnnouncement.innerHTML = "You win! Play again?"
        document.getElementById("refresh-button").style.visibility = "visible";
    } else if (computerScore == 5){
        winnerAnnouncement.innerHTML = "You lost! Play again?"
        document.getElementById("refresh-button").style.visibility = "visible";
    }
    
    
    
}