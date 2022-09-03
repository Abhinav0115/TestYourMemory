var cards = document.querySelectorAll(".card");

var isFlipped = false,
  firstCard,
  secondCard,
  countSuccess = 0,
  countFail = 0;

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");

  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    Check();
  }
}

function Check() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    countSuccess += 1;
    console.log("Success: " + countSuccess);
    success();
  } else {
    countFail += 1;
    console.log("failed: " + countFail);
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 800);
  //   setTimeout(() => {
  //     reset();
  //   }, 450);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

//TODO shuffle
(function shuffle() {
  cards.forEach((card) => {
    var index = Math.floor(Math.random() * 30);
    card.style.order = index;
  });
})();
