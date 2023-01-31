function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    const computer = document.querySelector('.computer');
    
    if (choice == 0){
        computer.textContent = "The Computer Chooses: Rock";
        return "ROCK";
    }
    else if (choice == 1){
        computer.textContent = "The Computer Chooses: Paper";
        return "PAPER";
    }
    else{
        computer.textContent = "The Computer Chooses: Scissors";
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection){
    
    if (playerSelection == "ROCK" && computerSelection == "ROCK"){
        results.textContent = "You tied. Rock ties Rock"
        return;
    }
    else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        results.textContent = "You lose. Rock loses to Paper";
        return;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        results.textContent = "You win. Rock beats Scissors"
        return;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        results.textContent = "You win. Paper beats Rock";
        return;
    }
    else if (playerSelection == "PAPER" && computerSelection == "PAPER"){
        results.textContent = "You tie. Paper ties Paper"
        return;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSORS"){
        results.textContent = "You lose. Paper loses to Scissors"
        return;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "ROCK"){
        results.textContent = "You lose. Scissors loses to Rock";
        return;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        results.textContent = "You win. Scissors beats Rock";
        return;
    }
    else {
        results.textContent = "You tie. Scissors ties Scissors";
        return;
    }
}

function winner(wins){

    if (results.textContent.slice(0,7) == "You win"){
        wins += 1;

        if (wins == 5){
            win.textContent = `${wins}`;
            const round = document.querySelector('.round');
            round.textContent = "You won 5 games!";
            return 0;
        }
        else if (wins < 5){
            win.textContent = `${wins}`;
            return 1;
        }
    }
    return 0;
}

function loser(losses){

    if (results.textContent.slice(0,7) == "You los"){
        losses += 1;

        if (losses == 5){
            loss.textContent = `${losses}`;
            const round = document.querySelector('.round');
            round.textContent = "You lost 5 games!";
            return 0;
        }
        else if (losses < 5){
            loss.textContent = `${losses}`;
            return 1;
        }
    }
    return 0;
}

function tied(ties){

    if (results.textContent.slice(0,7) == "You tie"){
        ties += 1;
        tie.textContent = `${ties}`;
        return 1;
    }
    return 0;
}

const results = document.querySelector(".results");
const win = document.querySelector('.wins');
const loss = document.querySelector('.losses');
const tie = document.querySelector('.ties');


let wins = 0;
let losses = 0;
let ties = 0;


function game(){
    
    const rock = document.querySelector(".rock");
    rock.addEventListener('click',function() {
        playRound("ROCK", getComputerChoice())
        wins += winner(wins);
        losses += loser(losses);
        ties += tied(ties);
        });
    
    const paper = document.querySelector(".paper");
    paper.addEventListener("click", function() {
        playRound("PAPER", getComputerChoice());
        wins += winner(wins);
        losses += loser(losses);
        ties += tied(ties);
        });
    
    const scissors = document.querySelector(".scissors");
        scissors.addEventListener("click", function() {
        playRound("SCISSORS", getComputerChoice());
        wins += winner(wins);
        losses += loser(losses);
        ties += tied(ties);
        });


}

game();

const restart = document.querySelector('.restart');
restart.addEventListener('click', function() {
    wins, losses, ties = 0, 0, 0;
    location.reload();
});