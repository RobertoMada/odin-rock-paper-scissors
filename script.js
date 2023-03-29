let choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundResult;

function getComputerChoice(){
  let selection = Math.floor(Math.random() * 3);
  return choiceArray.at(selection);
} 

const buttons = document.querySelectorAll("button.selection-button");
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const displayResult = document.querySelector('#display-result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.textContent;
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
    updateScore();
  })
})

function playRound(playerSelection, computerSelection){
  if(playerSelection === computerSelection){
    roundResult = "It`s a tie! " + playerSelection + " ties with " + computerSelection;
  }else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    playerScore++;
    roundResult = "You won! " + playerSelection + " beats " + computerSelection;
  }else if(playerSelection == "Rock" && computerSelection == "Paper"){
    computerScore++;
    roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
  }else if(playerSelection == "Scissors" && computerSelection == "Rock"){
    computerScore++;
    roundResult = "You lose! " + computerSelection + " beats " + playerSelection;    
  }else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    playerScore++;
    roundResult = "You won! " + playerSelection + " beats " + computerSelection;
  }else if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerScore++;
    roundResult = "You won! " + playerSelection + " beats " + computerSelection;
  }else if(playerSelection == "Paper" && computerSelection == "Scissors"){
    computerScore++;
    roundResult = "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function updateScore(){
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
  displayResult.textContent = roundResult;
}



