const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playText = document.querySelector('.gametext');

let playerPoints = 0;
let computerPoints = 0;

// function restartGame() {
//     rock.disabled = false;
//     paper.disabled = false;
//     scissors.disabled = false;
//     let playerPoints = 0;
//     let computerPoints = 0;

//     document.body.removeChild(playAgain);
// }

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0 && this.id === 'rock') {
        playText.textContent = `You chose ${this.id} and computer chose Rock. Tie! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 0 && this.id === 'paper') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Rock. Win! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 0 && this.id === 'scissors') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Rock. Lose! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'rock') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Paper. Lose! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'paper') {
        playText.textContent = `You chose ${this.id} and computer chose Paper. Tie! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'scissors') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Paper. Win! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'rock') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Win! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'paper') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Lose! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'scissors') {
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Tie! Current score: Player: ${playerPoints} Computer: ${computerPoints}`;
    } else {
        console.log('Broken, check code');
    }

    if(playerPoints === 5 || computerPoints === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        
        let playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';
        document.body.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
            playerPoints -= playerPoints;
            computerPoints -= computerPoints;
            playText.textContent = ``;
            document.body.removeChild(playAgain);
        });
    } else {
        return;
    }
}

rock.addEventListener('click', computerPlay);
paper.addEventListener('click', computerPlay);
scissors.addEventListener('click', computerPlay);