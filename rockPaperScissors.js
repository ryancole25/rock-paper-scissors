function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0){
        return "Rock";
    }
    else if (choice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getPlayerChoice(){
    while (true){
    let choice = prompt("rock, paper, or scissors?:");
    if (choice.toUpperCase() != "ROCK" && choice.toUpperCase() != "PAPER" && choice.toUpperCase() != "SCISSORS"){
        console.log("Invalid Response. Make sure you typed correctly.");
        continue;
    }
    return choice;
    }  
}

function playRound(playerSelection, computerSelection){
    // console.log(`The computer picked ${computerSelection}.`);
    if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "ROCK"){
        return "You tied. Rock ties Rock";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER"){
        return "You lose. Rock loses to Paper";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS"){
        return "You win. Rock beats Scissors";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK"){
        return "You win. Paper beats Rock";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "PAPER"){
        return "You tie. Paper ties Paper";
    }
    else if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "Scissors"){
        return "You lose. Paper loses to Scissors";
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK"){
        return "You lose. Scissors loses to Rock";
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
        return "You win. Scissors beats Rock";
    }
    else {
        return "You lose. Scissors ties Scissors";
    }
}

function game(){
    let wins = 0;
    let losses = 0;
    let ties = 0;

    for (let i = 0; i < 5; i ++){
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(`The computer picked ${computerSelection}`);
        if (playRound(playerSelection, computerSelection).slice(0,7) == "You win"){
            wins += 1;
            console.log(playRound(playerSelection, computerSelection));
        }
        else if (playRound(playerSelection, computerSelection).slice(0,7) == "You los"){
            losses += 1;
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            ties += 1;
            console.log(playRound(playerSelection, computerSelection));
        }
        console.log(`SCOREBOARD: ${wins} win(s), ${losses} loss(es), ${ties} tie(s)`);
    }

    if (wins > losses){
        console.log("You won the series!");
    }
    else if (wins < losses){
        console.log("You lost the series.");
    }
    else {
        console.log("You tied the series.");
    }
}

game();