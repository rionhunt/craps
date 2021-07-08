// JavaScript file to roll the dice and change the die images.

var randomNumber1;
var randomNumber2;
var randomImage;

// Function to roll the dice return a number between 1 and 6.
function rollDice() {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
// Roll and set first die.
randomNumber1 = rollDice();
if (randomNumber === 1) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice1.png");
} else if (randomNumber === 2) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice2.png");
} else if (randomNumber === 3) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice3.png");
} else if (randomNumber === 4) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice4.png");
} else if (randomNumber === 5) {
  document
    .getElementsByClassName("img1")[0]
    .setAttribute("src", "images/dice5.png");
} else if (randomNumber === 6) {
  document
    .getElementsByClassName("img6")[0]
    .setAttribute("src", "images/dice6.png");
}

//Roll and set the second die.
randomNumber2 = rollDice();
if (randomNumber === 1) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice1.png");
} else if (randomNumber === 2) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice2.png");
} else if (randomNumber === 3) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice3.png");
} else if (randomNumber === 4) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice4.png");
} else if (randomNumber === 5) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice5.png");
} else if (randomNumber === 6) {
  document
    .getElementsByClassName("img2")[0]
    .setAttribute("src", "images/dice6.png");
}
// Declare a winner.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber2 === randomNumber1) {
  document.querySelector("h1").innerHTML = "It's A Tie! Roll Again!";
}
