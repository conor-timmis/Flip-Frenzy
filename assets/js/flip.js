/* jshint esversion: 11 */

const cardContainer = document.getElementById("card-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

let restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", restart);

function restart() {
    location.reload();
}

fetch("./assets/data/cards.json")
 .then((res) => res.json())
 .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
 });

 function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while (currentIndex !== 0) {
        randomIndex  = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
 }

 function generateCards() {
        for (let card of cards) {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.setAttribute("data-name", card.name);
            cardElement.innerHTML = `
            <div class="front">
            <img class="front-image" src=${card.image} />
            </div>
            <div class="back"></div>
            `;
            cardContainer.appendChild(cardElement);
            cardElement.addEventListener("click", flipCard);
        }
    }
 
 function flipCard() {

 }

 function checkForMatch() {

 }

 function disableCards() {

 }

 function unflipCards() {

 }

 function resetBoard() {

 }