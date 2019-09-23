// Function call to roll the dice, activated everytime the page is refreshed
rollDice(randomNumber(), randomNumber());

// Generates a random number between 1 and 6
function randomNumber() {
  return Math.floor(Math.random() * 6 + 1);
}

// Changes the dice images to correspond to the values passed in
function setDice(dice1, dice2) {
  document.querySelector(".img1").setAttribute("src", "images/dice" + dice1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + dice2 + ".png");
}

// Sets title to display the result of the dice roll
function setTitle(dice1, dice2) {
  document.querySelector("h1").innerHTML = "" + diceResult(dice1, dice2) + "";
}

// Compares the values of the dice to decide the outcome
function diceResult(dice1, dice2) {
  if (dice1 > dice2) {
    return "🚩 Player 1 wins!";
  } else if (dice1 < dice2) {
    return "Player 2 wins! 🚩";
  } else {
    return "It's a draw!";
  }
}

// Receives 2 random numbers generated from randomNumber()
function rollDice(dice1, dice2) {
  setTitle(dice1, dice2);
  setDice(dice1, dice2);
}