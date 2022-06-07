const CHOICES = ["ROCK", "PAPER", "SCISSORS"]

function computerPlay() {
    let random = Math.floor(Math.random() * CHOICES.length);
    // console.log(random, CHOICES[random]);
    return CHOICES[random];
}

function playRound(playerSelection, computerSelection) {
    let player = convertToNum(playerSelection.toUpperCase());
    let computer = convertToNum(computerSelection.toUpperCase());

    let table = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];

    let result = table[player][computer];
    let text = document.querySelector('#results');

    if (result === 0) {
        // console.log(`Draw! You both picked ${playerSelection}!`);
        text.textContent = `Draw! You both picked ${playerSelection}!`;
    } else if (result === 1) {
        // console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        text.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        // console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        text.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    }

    return result;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        if (i !== 0) {
            console.log(`Current score: ${playerScore}-${computerScore}`);
        }

        let playerSelection = prompt(`Please enter "ROCK", "PAPER", or "SCISSORS":`).toUpperCase();
        let computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            playerScore++;
        } else {
            computerScore++;
        }
    }

    console.log(`The five rounds are up!`);
    console.log(`The final score is: ${playerScore}-${computerScore}`);
    if (playerScore === computerScore) {
        console.log(`It's a draw!`);
    } else if (playerScore > computerScore) {
        console.log(`You win the game!`);
    } else {
        console.log(`You lose the game!`);
    }
}

function convertToNum(choice) {
    if (choice === "ROCK") {
        return 0;
    } else if (choice === "PAPER") {
        return 1;
    } else {
        return 2;
    }
}

// game();

const buttonRock = document.querySelector(`#rock`);
buttonRock.addEventListener('click', () => playRound('ROCK', computerPlay()))
const buttonPaper = document.querySelector(`#paper`);
buttonPaper.addEventListener('click', () => playRound('PAPER', computerPlay()))
const buttonScissors = document.querySelector(`#scissors`);
buttonScissors.addEventListener('click', () => playRound('SCISSORS', computerPlay()))

