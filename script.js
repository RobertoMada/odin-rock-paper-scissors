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
const gameResult = document.querySelector('#game-result');
const resetButton = document.querySelector('#reset-button');

function getComputerChoice(){
  let selection = Math.floor(Math.random() * 3);
  return choiceArray.at(selection);
} 



buttons.forEach((button) => {
  button.addEventListener('click', function getPlayerChoice(){
    playerSelection = button.title;
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
    resetButton.removeAttribute('hidden');
       
  }else if(playerScore == 5){
    gameResult.textContent = 'You win! Good game!';
    buttons.forEach(button => button.remove());
    resetButton.removeAttribute('hidden');
  }
}

resetButton.addEventListener('click', restartGame);

function restartGame(){
  console.log("restart game");
  resetButton.setAttribute('hidden', 'hidden');
  displayComputerScore.textContent = '0';
  displayPlayerScore.textContent = '0';
  playerScore = 0;
  computerScore = 0;
  gameResult.textContent = '';
  displayResult.textContent = '';
  buttons.forEach(button => document.querySelector('.selection-container').appendChild(button));
}