let choiceArray = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;
let roundResult;

const buttons = document.querySelectorAll("button.selection-button");
const displayPlayerScore = document.querySelector('#player-score');
const displayComputerScore = document.querySelector('#computer-score');
const displayResult = document.querySelector('#display-result');
const gameResult = document.querySelector('#game-result')

function getComputerChoice(){
  let selection = Math.floor(Math.random() * 3);
  return choiceArray.at(selection);
} 



buttons.forEach((button) => {
  button.addEventListener('click', function getPlayerChoice(){
    playerSelection = button.textContent;
    playGame();
  });
});

function playGame(){
  computerSelection = getComputerChoice();
  playRound(playerSelection,computerSelection);
  updateScore();
  checkWinner();
}

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

function checkWinner(){
  if(computerScore == 5){
    gameResult.textContent = 'You lose! HaHaHa';
    buttons.forEach(button => button.remove());
  
       
  }else if(playerScore == 5){
    gameResult.textContent = 'You win! Good game!';
    buttons.forEach(button => button.remove());
  }
}


