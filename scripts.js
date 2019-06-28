const cards = document.querySelectorAll('.memory-card');
 
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
 
function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
 
  this.classList.add('flip');
 
  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
 
    return;
  }
 
  // second click
  secondCard = this;
 
  checkForMatch();
}
 
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 
  isMatch ? disableCards() : unflipCards();
}
 
function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
 
  resetBoard();
}
 
function unflipCards() {
  lockBoard = true;
 
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
 
    resetBoard();
  }, 1500);
}
 
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
 
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();
 
cards.forEach(card => card.addEventListener('click', flipCard));
 
 
 
 
 
let hour = 0;
  let minute = 0;
  let seconds = 0;
  let totalSeconds = 0;
 
  let intervalId = null;
 
  function startTimer() {
    ++totalSeconds;
    hour = Math.floor(totalSeconds /3600);
    minute = Math.floor((totalSeconds - hour*3600)/60);
    seconds = totalSeconds - (hour*3600 + minute*60);
 
    document.getElementById("hour").innerHTML =hour;
    document.getElementById("minute").innerHTML =minute;
    document.getElementById("seconds").innerHTML =seconds;
  }
 
  document.getElementById('start-btn').addEventListener('click', () => {
    intervalId = setInterval(startTimer, 1000);
  })
 
  document.getElementById('stop-btn').addEventListener('click', () => {
    if (intervalId)
      clearInterval(intervalId);
  });
 
   
  document.getElementById('reset-btn').addEventListener('click', () => {
     totalSeconds = 0;
     document.getElementById("hour").innerHTML = '0';
     document.getElementById("minute").innerHTML = '0';
     document.getElementById("seconds").innerHTML = '0';
  });
