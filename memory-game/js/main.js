
let cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'queen',
suit: 'diamonds',
cardImage: "images/queen-of-diamonds"
},
{
rank: 'King',
suit: 'hearts',
cardImage: "images/king-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {

	if(cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.")
	}
}


var flipCard = function () {

	cardID = this.getAttribute('data-id');
	console.log(cardID);

	cardsInPlay.push(cards[cardID].rank);

	this.setAttribute('src', cards[cardID].cardImage);

	console.log(cards[cardID].suit);

	console.log(cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();

		cardsInPlay =[];
	}
}
	
car createBoard = function() {

	for (var i = 0; i < cards.length; i++) {

		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);

		// adding an event listener 

		cardElement.addEventListener('click', flipCard);

		// now card needs to go on the board

		docuemnt.getElementById('game-board').appendChild(cardElement);

	}
}


//creat a function that will store all stpes related to seletin or flipping ove a macrd
 


//second create a function to grpup together the logice to check to see if the two cards that flipped over matcheach other.
