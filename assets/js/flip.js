/* jshint esversion: 11 */

const data = [
    {
      image: "../assets/images/card-clubs.png",
      name: "clubs",
    },
    {
      image: "../assets/images/card-diamonds.png",
      name: "diamonds",
    },
    {
      image: "../assets/images/card-hearts.png",
      name: "hearts",
    },
    {
      image: "../assets/images/card-spades.png",
      name: "spades",
    },
    {
      image: "../assets/images/card-queens.png",
      name: "queens",
    },
    {
      image: "../assets/images/card-kings.png",
      name: "kings",
    },
  ];
  
  const cardContainer = document.getElementById("card-container");
  let cards = [];
  let firstCard, secondCard;
  let lockBoard = false;
  let score = 0;
  let attempts = document.querySelector(".Attempts");
  let totalAttempts = 0;
  
  document.addEventListener("DOMContentLoaded", function () {
    var howToPlayButton = document.getElementById("htp-button");
    var howToPlaySection = document.getElementById("howtoplay");
  
    if (howToPlayButton && howToPlaySection) {
      howToPlayButton.addEventListener("click", function () {
        howToPlaySection.style.display =
          howToPlaySection.style.display === "block" ? "none" : "block";
      });
    }
  });
  
  cards = [...data, ...data];
  shuffleCards();
  generateCards();
  
  function shuffleCards() {
    let currentIndex = cards.length,
      randomIndex,
      temporaryValue;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
  }
  
  function generateCards() {
    const maxAllowedOccurrences = 3;
    const cardBackOccurrences = {};
    for (let card of cards) {
      const flipCard = document.createElement("div");
      flipCard.classList.add("flip-card");
      flipCard.setAttribute("data-name", card.name);
      let randomBack;
      do {
        randomBack = Math.floor(Math.random() * 4) + 1;
      } while (cardBackOccurrences[randomBack] >= maxAllowedOccurrences);
  
      cardBackOccurrences[randomBack] =
        (cardBackOccurrences[randomBack] || 0) + 1;
      flipCard.innerHTML = `
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                      <img src="assets/images/card-back${randomBack}.png" alt="random card back" data-card="${card.name}" class="card-image">
                  </div>
                  <div class="flip-card-back">
                      <img src="images/${card.image}" alt="${card.name}" class="card-image">
                  </div>
              </div>
          `;
      cardContainer.appendChild(flipCard);
      flipCard.addEventListener("click", flipClickedCard)
    }
  }
  
  function flipClickedCard() {
    if (lockBoard || this === firstCard) {
      return;
    }
  
    this.style.transform = "rotateY(180deg)"
  
    if (!firstCard) {
      firstCard = this;
    } else {
      secondCard = this;
      totalAttempts++;
      attemptsDisplay();
      checkForMatch();
    }
  }
  
  function checkForMatch() {
    if (lockBoard || !firstCard || !secondCard) {
      return;
    }
  
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    if (isMatch) {
      disableCards();
      score++;
      document.querySelector(".score").textContent = score;
      if (score === cards.length / 2) {
        showWinner();
        resetScore();
      }
    } else {
      lockBoard = true;
      unflipCards();
    }
  }
  
  function attemptsDisplay() {
    attempts.textContent = totalAttempts;
  }
  
  function disableCards() {
    firstCard.removeEventListener("click", flipClickedCard);
    secondCard.removeEventListener("click", flipClickedCard);
  
    resetBoard();
  }
  
  function unflipCards() {
    setTimeout(() => {
      if (firstCard && secondCard) {
        firstCard.style.transform = "rotateY(0deg)"
        secondCard.style.transform = "rotateY(0deg)"
      }
      resetBoard();
      lockBoard = false;
    }, 750);
  }
  
  function showWinner() {
    const winner = document.getElementById("winner");
    winner.classList.remove("hidden");
  }
  
  function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  }
  
  let restartButtonPressed = false;
  
  let restartBtn = document.getElementById("restart-btn");
  restartBtn.addEventListener("click", restart);
  
  function restart() {
    restartButtonPressed = true;
    location.reload();
  }
  
  function resetScore() {
    score = 6;
    document.querySelector(".score").textContent = score;
  }
  