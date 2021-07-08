// JavaScript file to roll the dice and change the die images.

var randomNumber;
var randomImage;

// Function to roll the dice.
function rollDice() {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  return randomNumber;
}

// Roll and set first die.
randomNumber = rollDice();
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
    .setAttribute("src", "images/dice2.png");
}

//Roll and set the second die.
randomNumber = rollDice();
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
    .setAttribute("src", "images/dice2.png");
}
