var prompt = require("prompt-sync")();

var randomNumber = Math.floor(Math.random() * 11);
var count = 1;
var guessHistory = [];
var guessNumber = Number(prompt("Guess a number between 0 and 10: "));

do {
  if (guessHistory.includes(guessNumber)) {
    console.log("Number Already Guessed!");
  } else if (guessNumber < randomNumber) {
    console.log("Too Low!");
    guessHistory.push(guessNumber);
    count++;
  } else if (guessNumber > randomNumber) {
    console.log("Too High!");
    guessHistory.push(guessNumber);
    count++;
  } else if (isNaN(guessNumber)) {
    console.log("Not a number! Try Again!");
  } else {
    break;
  }
  getNewGuess();
} while (guessNumber !== randomNumber);

console.log("You got it! You took " + count + " attempts!");

function getNewGuess() {
  return guessNumber = Number(prompt("Guess again: "));
}