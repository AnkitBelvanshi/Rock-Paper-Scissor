const elements = ["rock", "paper", "scissors"]

function getComputerChoice(){
    let item = elements[Math.floor(Math.random()*elements.length)];
    // let item = elements[1];
    return item;
}
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "TIE";
    }
    else if(
        (playerSelection == "rock" && computerSelection =="scissors") ||
        (playerSelection == "scissors" && computerSelection =="paper") ||
        (playerSelection == "paper" && computerSelection =="rock") 
    ){
        return "Player Win";
    }
    else {
        return "Computer Win";
    }

}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "TIE"){
        return "Its a Tie!"
    }
    else if(result == "Player Win"){
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }

}
function getPlayerChoice() {
    let userInput = false;
    while(userInput ==false){
        const choice = prompt("Rock Paper Scissors: Select");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(elements.includes(choiceInLower)){
            userInput = true;
            return choiceInLower;
        }
    }
}
function game(){
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome!");
    
    for(let i=0; i<5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection)); 
        if(checkWinner(playerSelection, computerSelection) == "Player Win"){
            playerScore++;
        }else if(checkWinner(playerSelection, computerSelection) == "Computer Win"){
            computerScore++;
        }   
    }
    console.log("Game Over");
    if(playerScore > computerScore){
        console.log("User was the winner");
    }else if(playerScore < computerScore){
        console.log("Computer was the winner")
    }else{
        console.log("We have a tie!");
    }
}

game();