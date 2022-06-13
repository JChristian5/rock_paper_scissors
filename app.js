//Chooses one of three options for computer.

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    if (computerChoice === 0) {
        return 'Rock';
    } else if (computerChoice === 1) {
        return 'Paper';
    } else if (computerChoice === 2) {
        return 'Scissors';
    } else {
        console.log('Broken, check code');
    }
}

//Takes the value of computer options and player input and returns one of the options below

function playGame(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Rock') {
        console.log(`Tie! Both players chose ${playerSelection}!`);
        return 'Tie';
    } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return 'Lose';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 'Win';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 'Win';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        console.log(`Tie! Both players chose ${playerSelection}!`);
        return 'Tie';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return 'Lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
        return 'Lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 'Win';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        console.log(`Tie! Both players chose ${playerSelection}.`);
        return 'Tie';
    }
}

let playerPoints = 0;
let computerPoints = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Choose Rock, Paper, or Scissors:").toLowerCase();

        if (playGame(playerSelection, computerSelection) === 'Win') {
            playerPoints += 1;
            alert(`You win! ${playerSelection} beats ${computerSelection}! You: ${playerPoints}   Computer: ${computerPoints}`);
        } else if (playGame(playerSelection, computerSelection) === 'Tie') {
            i--;
            alert(`Tie! Both players chose ${playerSelection}. You: ${playerPoints}   Computer: ${computerPoints}`);
        } else if (playGame(playerSelection, computerSelection) === 'Lose') {
            computerPoints += 1;
            alert(`You lose! ${computerSelection} beats ${playerSelection}! You: ${playerPoints}   Computer: ${computerPoints}`);
        }
    }

    if (playerPoints > computerPoints) {
        alert(`Congratulations! You win!`);
    } else {
        alert(`You lose! Try again by hitting the refresh button.`);
    }
}

game();