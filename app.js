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

let computerSelection = computerPlay();

let playerSelection = prompt("Choose Rock, Paper, or Scissors:");

function playGame(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        console.log(`Tie! Both players chose ${playerSelection}!`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        console.log(`Tie! Both players chose ${playerSelection}!`);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        console.log(`Tie! Both players chose ${playerSelection}.`);
    }
}

playGame(playerSelection, computerSelection);