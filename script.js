const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const playText = document.querySelector('.gametext');
const currentScore = document.querySelector('.scoretext');

let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0 && this.id === 'rock') {
        playText.textContent = `You chose ${this.id} and computer chose Rock. Tie!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 0 && this.id === 'paper') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Rock. Win!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 0 && this.id === 'scissors') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Rock. Lose!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'rock') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Paper. Lose!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'paper') {
        playText.textContent = `You chose ${this.id} and computer chose Paper. Tie!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 1 && this.id === 'scissors') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Paper. Win!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'rock') {
        playerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Win!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'paper') {
        computerPoints += 1;
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Lose!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else if (computerChoice === 2 && this.id === 'scissors') {
        playText.textContent = `You chose ${this.id} and computer chose Scissors. Tie!`;
        currentScore.textContent = `Current score - Player: ${playerPoints} Computer: ${computerPoints}`;
    } else {
        console.log('Broken, check code');
    }

    if(playerPoints === 5 || computerPoints === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.remove('hover');
        paper.classList.remove('hover');
        scissors.classList.remove('hover');
        
        let playAgain = document.createElement('button');
        playAgain.textContent = 'Play Again';
        playAgain.classList.add('playagainbutton')
        document.body.appendChild(playAgain);
        playAgain.addEventListener('click', () => {
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
            rock.classList.add('hover');
            paper.classList.add('hover');
            scissors.classList.add('hover');
            playerPoints -= playerPoints;
            computerPoints -= computerPoints;
            playText.textContent = ``;
            currentScore.textContent = ``;
            document.body.removeChild(playAgain);
        });
    } else {
        return;
    }
}

rock.addEventListener('click', computerPlay);
paper.addEventListener('click', computerPlay);
scissors.addEventListener('click', computerPlay);