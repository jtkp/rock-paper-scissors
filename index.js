const CHOICES = ["Rock", "Paper", "Scissors"]

function computerPlay() {
    let random = Math.floor(Math.random() * CHOICES.length);
    console.log(random, CHOICES[random]);
}

// computerPlay()