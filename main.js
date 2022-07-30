const computerChoice = ["rock", "paper", "scissors"];
var userInput = 'rock';
userInput = userInput.toLowerCase();
var getUserChoice = function(userInput){
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}}

getUserChoice(userInput);

// GETTING COMPUTER INPUT
let computerInput = computerChoice[Math.floor(Math.random() * 3)];
console.log("Computer chose" + ` ${computerInput}`);

// DECLARE WINNER 
const playGame = determineWinner(userInput, computerInput);

function determineWinner(userInput, computerInput) {
  if (userInput === 'rock' && computerInput === 'paper') {
    console.log('You lose! Paper beats Rock');
} else if (userInput === 'rock' && computerInput === 'scissors') {
    console.log('You win! Rock beats Scissors');
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Scissors beats Paper');
} else if (userInput === 'scissors' && computerInput === 'rock') {
    console.log('You lose! Rock beats Scissors');
  } else if (userInput === 'paper' && computerInput === 'rock') {
    console.log('You win! Paper beats Rock');
  } else if (userInput === 'paper' && computerInput === 'scissors') {
    console.log('You lose! Scissors beats Paper');
} else if (userInput === computerInput) {
    console.log('You tie!');
  } else {
    console.log('Sorry, something went wrong. Please try again.');
  }
}
playGame;
