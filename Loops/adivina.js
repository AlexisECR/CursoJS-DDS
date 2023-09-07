// 1. Set the maximum value for the number guessing game.

const prompt = require('prompt-sync')();

const maxNumber = 50; // You can change this to your desired maximum value.


const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

// Uncomment the following line for development to see the random number.
// console.log("Random number:", randomNumber);

// 3. Create a variable to track whether the answer is correct.
let isCorrect = false;

// Function to start the game.
function startGame() {
  console.log("Bienvenido adivina el numero");
  console.log("Adivina el numero del 1 al " + maxNumber + ".");
  console.log("¿Puedes adivinarlo? ");
  isCorrect = false; // Reset the answer tracker.
  playGame();
}

// Function to play the game.
function playGame() {
  const userGuess = parseInt(prompt("Enter your guess:"));

  if (isNaN(userGuess)) {
    console.log("Please enter a valid number.");
    playGame();
  } else {
    if (userGuess === randomNumber) {
      console.log("Congratulations! You guessed the correct number: " + randomNumber);
      isCorrect = true;
    } else if (userGuess < randomNumber) {
      console.log("Try a higher number.");
    } else {
      console.log("Try a lower number.");
    }

    if (!isCorrect) {
      // Continue playing if the answer is not correct.
      playGame();
    } else {
      console.log("Game over. Thanks for playing!");
    }
  }
}

// Start the game.
startGame();