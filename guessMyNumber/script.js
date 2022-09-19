"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
   document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   console.log(guess, typeof guess);
   //tyhjä
   if (!guess) {
      //document.querySelector(".message").textContent = "Not number";
      displayMessage("Not number");
   }
   //voitto
   else if (guess === secretNumber) {
      //document.querySelector(".message").textContent = "Correct!";
      displayMessage('Correct!');
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;
      //jos highscore on isompi kuin score
      if (score > highscore) {
         highscore = score;
         document.querySelector(".highscore").textContent = highscore;
      }
   }
   //arvaus on pienempi
   else if (guess < secretNumber) {
      if (score > 1) {
         //document.querySelector(".message").textContent = "Higher";
         displayMessage('Higher');
         score--;
         document.querySelector(".score").textContent = score;
      }
      //pisteet loppui
      else {
         //document.querySelector(".message").textContent = "You lost a game...";
         displayMessage('You lost a game...');
         document.querySelector(".score").textContent = "0";
      }
   }
   //arvaus on isompi
   else if (guess > secretNumber) {
      //document.querySelector(".message").textContent = "Lower";
      displayMessage('Lower');
      score--;
      document.querySelector(".score").textContent = score;
   }
});
//palauta tiedot, paitsi highscore
document.querySelector(".again").addEventListener("click", function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector(".number").textContent = "?";
   //document.querySelector(".message").textContent = "Start guessing...";
   displayMessage('Start guessing...');
   document.querySelector(".guess").value = "";
   document.querySelector("body").style.backgroundColor = "#222";
   document.querySelector(".number").style.width = "15rem";
   document.querySelector(".score").textContent = score;
});
