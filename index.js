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

    if (result === 0) {
        return `It's a draw! You both picked ${player}!`
    } else if (result === 1) {
        return `You win! ${player} beats ${computer}!`
    } else {
        return `You lose! ${computer} beats ${player}!`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        
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

// computerPlay()