
let cards = ["queen", "queen", "king", "king"];

	let cardsInPlay = [];

	var cardOne = cards[0];

		cardsInPlay.push(cardOne);

			var cardOne = "User flipped queen";

			console.log(cardOne);


	var cardTwo = cards[2];

		cardsInPlay.push(cardTwo);

			var cardTwo = "User flipped king";

			console.log(cardTwo);

if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!")
} else {
	alert("Sorry, try again.")
}