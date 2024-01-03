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
    } else {
        return "deu merda";
    }
}

function playerChoice() {
    Choice = prompt("Rock paper scissors go!");
    Choice = Choice.toLowerCase();
    return Choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "tie";
        } else if (computerSelection == "paper") {
            return "lost";
        } else {
            return "won";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "won";
        } else if (computerSelection == "paper") {
            return "tie";
        } else {
            return "lost";
        }
    } else if (computerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "lost";
        } else if (computerSelection == "paper") {
            return "won";
        } else {
            return "tie";
        }
    } else {
        return "pass";
    }
}

function game() {
    console.log("Let's play rock, paper scissors!");
    console.log("The first to win 5 games wins!");
    let playerWins = 0
    let computerWins = 0
    let round = 1
    let chances = 1
    while (playerWins < 5 && computerWins < 5) {
        console.log(`starting round ${round}!`)
        let playerSelection = playerChoice();
        let computerSelection = computerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === "tie") {
            console.log (`That was a tie! We both played ${playerSelection}!`);
            round = round + 1;
        } else if (result == "won") {
            console.log (`You won this round! Your ${playerSelection} beat my ${computerSelection}!`);
            playerWins = playerWins + 1;
            round = round + 1;
            if (playerWins !== 5) {
                console.log (`The score now is: You won ${playerWins} and I won ${computerWins}.`);
            } else {
                console.log ("You won the game!");
            }

        } else if (result === "lost") {
            console.log (`You lost this round! my ${computerSelection} beat your ${playerSelection}!`);
            computerWins = computerWins + 1;
            round = round + 1;
            if (computerWins !== 5) {
                console.log (`The score now is: You won ${playerWins} and I won ${computerWins}.`);
            } else {
                console.log ("I won the game!");
            }
        } else if (result === "pass") {
            if (chances == 1) {
                console.log ("I'm going to give you another chance, you can only choose between rock, paper or scissors.");
                console.log ("If you do that again I'm going to get a free point.");
                chances = chances - 1
                round = round + 1;
            } else {
                computerWins = computerWins +1;
                console.log ("I told you! A point for me because you didn't choose between rock, paper or scissors.");
                if (computerWins !== 5) {
                    console.log (`The score now is: You won ${playerWins} and I won ${computerWins}.`);
                } else {
                    console.log ("I won the game!");
                }
            }

        }
    }
}

game()