let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
    let computer = Math.floor(Math.random() * 3 + 1);
    return computer;
}

function computerChoice() {
    let computerchoice = getComputerChoice()
    if (computerchoice == 1) {
        return "rock";
    } else if (computerchoice == 2) {
        return "paper";
    } else if (computerchoice == 3) {
        return "scissors";
    }
}

function tie (pChoice) {
    textwindow.textContent= `Oh god that is going to take a while!\nWe both chose ${pChoice}.\n
    Let's go again!\n
    Rock, paper, scissors, shoot!`;
}

function lost(pChoice, cChoice) {
    computerPoints += 1;
    pointsC.textContent= `${computerPoints} points`
    if (computerPoints == 5) {
        textwindow.textContent = `You lost you little bitch!\nMy ${cChoice} beats your shitty ${pChoice}!`;
        removeAllButtons();
        let playerPoints = 0;
        let computerPoints = 0;
        again();
    } else {
        textwindow.textContent = `My ${cChoice} beats you shitty ${pChoice}! \n\n\nRock, paper, scissors, shoot!`;
    }
}

function won(pChoice, cChoice) {
    playerPoints += 1;
    pointsP.textContent= `${playerPoints} points`
    if (playerPoints == 5) {
        textwindow.textContent = `You cheater you won!\nYour ${pChoice} beats somehow my ${cChoice}!`;
        removeAllButtons();
        let playerPoints = 0;
        let computerPoints = 0;
        again();
    } else {
        textwindow.textContent = `Your ${pChoice} broke my ${cChoice}! \n\n\nRock, paper, scissors, shoot!`;
    }

}

function again() {
    const playAgain = document.createElement("button");
    playAgain.textContent = "I wan't to play again!";
    buttons.appendChild(playAgain);
    playAgain.addEventListener('click', () => {
        start();
    })
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            tie("rock");
        } else if (computerSelection == "paper") {
            lost("rock", "paper");
        } else {
            won("rock", "scissor");
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            won("paper", "rock");
        } else if (computerSelection == "paper") {
            tie("paper");
        } else {
            lost("rock", "scissor");
        }
    } else if (playerSelection == "scissor") {
        if (computerSelection == "rock") {
            lost("scissor", "rock");
        } else if (computerSelection == "paper") {
            won("scissor", "paper");
        } else {
            tie("scissor");
        }
    }
}

function removeAllButtons() {
    while (buttons.firstChild) {
        buttons.removeChild(buttons.firstChild);
    }
}

const textwindow = document.querySelector(".textwindow")
const buttons = document.querySelector('.gamebuttons')
const pointsP = document.querySelector('.pointsP')
const pointsC = document.querySelector('.pointsC')

function gameIntroduction() {
    textwindow.textContent="It's going to be best of 5 !\n\n\nAre you ready?";
    const yes = document.createElement("button");
    yes.classList.add('Yes');
    yes.textContent = "Yes"
    buttons.appendChild(yes);
    const btnno = document.createElement("button");
    btnno.classList.add('No');
    btnno.textContent = "No"
    buttons.appendChild(yes);
    buttons.appendChild(btnno);
    btnno.addEventListener('click', () => {
        bitch();
    })
    yes.addEventListener('click', () => {
        textwindow.textContent="Rock, paper, scissors, shoot!";
        removeAllButtons()
        const rock = document.createElement('button');
        rock.textContent = "Rock";
        rock.classList.add('rock');
        buttons.appendChild(rock);
        const paper = document.createElement('button');
        paper.textContent = "Paper";
        paper.classList.add('paper');
        buttons.appendChild(paper);
        const scissor = document.createElement('button');
        scissor.textContent = "Scissor";
        scissor.classList.add('scissor');
        buttons.appendChild(scissor);
        let computerPoints = 0;
        let playerPoints = 0;
        rock.addEventListener('click', () => {
            let computerCh = computerChoice();
            playRound("rock", computerCh);
        })
        paper.addEventListener('click', () => {
            let computerCh = computerChoice();
            playRound("paper", computerCh);
        })
        scissor.addEventListener('click', () => {
            let computerCh = computerChoice();
            playRound("scissor", computerCh);
        })
    })
}

function bitch() {
    textwindow.textContent="Thats why I called you A BITCH!";
    removeAllButtons();
    const btnChange = document.createElement('button');
    btnChange.textContent = 'Ok, I changed my mind';
    buttons.appendChild(btnChange);
    btnChange.addEventListener('click', () => {
        removeAllButtons();
        gameIntroduction();
    })
}

function start () {
    computerPoints = 0;
    playerPoints = 0;
    pointsP.textContent= `${playerPoints} points`
    pointsC.textContent= `${computerPoints} points`
    removeAllButtons();
    textwindow.textContent="Hey you, unlucky bitch!\n\n\nWant to play a game of Rock Paper Scissors?";
    const btnyes = document.createElement('button');
    const btnno = document.createElement('button');
    btnyes.classList.add('yes');
    btnno.classList.add('no');
    btnyes.textContent = 'Yes';
    btnno.textContent = 'No';

    buttons.appendChild(btnyes);
    buttons.appendChild(btnno);

    btnno.addEventListener('click', () => {
        bitch();
    })

    btnyes.addEventListener('click', () => {
        removeAllButtons();
        gameIntroduction();
    })
}

start();
