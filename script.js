let choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let selection = Math.floor(Math.random() * 3);
  return choiceArray.at(selection);
} 

function playRound(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    return ("It`s a tie! " + playerSelection + " ties with " + computerSelection);
  }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    playerScore++;
    return ("You won! " + playerSelection + " beats " + computerSelection);
  }else if(playerSelection == "Rock" && computerSelection == "Paper"){
    computerScore++;
    return("You lose! " + computerSelection + " beats " + playerSelection);
  }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
    computerScore++;
    return("You lose! " + computerSelection + " beats " + playerSelection);    
  }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    playerScore++;
    return("You won! " + playerSelection + " beats " + computerSelection);
  }else if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerScore++;
    return("You won! " + playerSelection + " beats " + computerSelection);
  }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
    computerScore++;
    return("You lose! " + computerSelection + " beats " + playerSelection);
  }
}

function getPlayerChoice(){
  let selection = prompt("Select your weapon between Rock, Paper or Scissors!");
  return formatPlayerChoice(selection);
}

function formatPlayerChoice(selection){
  selection = selection.toLowerCase();
  selection = selection.charAt(0).toUpperCase() + selection.slice(1);
  return selection;
}

function game(){
  for(let i = 0; i <= 4; i++){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Score is: " + playerScore + " - " + computerScore);
  }
}

