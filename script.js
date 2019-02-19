let playerScore= 0;
let computerScore = 0;
let tiedScore = 0;
const youDraw = document.getElementById('youScore');
const compDraw = document.getElementById('compScore');
const tiedDraw = document.getElementById('tiedScore');
const message = document.getElementById('message');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) =>{
    button.addEventListener('click',function(){
        playRound(button.id);
        });
    })

function computerPlay() {
  let comSelect = Math.floor(Math.random() * 3);
  let selection = (comSelect === 0) ? "rock" :
                  (comSelect === 1) ? "paper" : "scissors";
  return selection;
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  let result = "";
  
  if(playerSelection === computerSelection) {
      tiedScore++;
      result = "t";
  } 
  else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
           playerSelection == 'paper' && computerSelection == 'rock' ||
           playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        result = "w";
  } 
  else {
        computerScore++;
        result = "l";
  }
  setHtml(result);
}

function setHtml(outcome) {
    tiedDraw.innerHTML = tiedScore;
    youDraw.innerHTML = playerScore;
    compDraw.innerHTML = computerScore;

    switch (outcome){
        case "t":
            message.innerHTML = "You tied";
            break;
        case "w":
            message.innerHTML = "You win this round";
            break;
        default:
            message.innerHTML = "You lose this round";
    }
    checkGame();
}

function checkGame() {
    if(playerScore >= 5){
        message.innerHTML = "You win the game!";
        gameFinish();
    } else if(computerScore >= 5) {
        message.innerHTML = "You lost the game!";
        gameFinish();
    }
}

function gameFinish() {
    const container = document.querySelector('#container');
    const resetButton = document.createElement('BUTTON');
    const butText = document.createTextNode("Reset Game");
    resetButton.appendChild(butText);
    container.appendChild(resetButton);

    resetButton.addEventListener('click', function() {
        resetAll();
        container.removeChild(resetButton);
    });

    buttons.forEach((button) =>{
        button.disabled = true;
        })
}

function resetAll(){
    playerScore = 0;
    computerScore = 0;
    tiedScore = 0;
    message.innerHTML = "New Game";

    buttons.forEach((button) =>{
        button.disabled = false;
        })
}


