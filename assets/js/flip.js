/* jshint esversion: 11 */

Const cardContainer = document.querySelector(".card-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

let restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", restart);

function restart() {
    location.reload();
}

fetch("./assets/data/cards.json");
 .then((res) => res.json())
 .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
 });

 