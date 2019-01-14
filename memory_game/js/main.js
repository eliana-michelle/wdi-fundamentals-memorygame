console.log("Up & running!");

var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage:	"images/king-of-hearts.png"
  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage:"images/king-of-diamonds.png"
  }
];
var cardsInPlay = [];

var userScore = 0;

var checkForMatch = function(){
    if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
    userScore ++
    document.getElementById('user-score').innerHTML = userScore;
  } else {
    alert("Sorry, try again!");
    }
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src', cards[cardId].cardImage)
  cardsInPlay.push(cards[cardId].rank);
  if (cardsInPlay.length === 2) {
    setTimeout(checkForMatch,200);
  };
}

var createBoard = function () {
  for (i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.setAttribute('class', 'playingCards');
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  };
};

createBoard()

var reset = function () {
  var resetCards = document.getElementsByClassName('playingCards');
  for (i = 0; i < resetCards.length; i++) {
    resetCards[i].setAttribute('src', 'images/back.png');
  }
  cardsInPlay = [];
}

document.getElementById('reset').addEventListener('click', reset);
