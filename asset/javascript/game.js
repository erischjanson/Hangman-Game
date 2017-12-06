/*
--Global: Initialize the game
			Computer chooses random letter
			set wins and losses
			set remaining guesses
			set up guesses so far array

Put game text on the page

Collect user input(letter)

Restart the game

notes: prevent user from entering non-letter
		prevent user from entering same letter twice




*/



var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
	"v", "w", "x", "y", "z"
];

function randomLetter() {
	//var computerChoices=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
	//"v", "w", "x", "y", "z"];

	var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	return computerLetter;
}



var wins = 0;
var losses = 0;
var remainingGuesses = 9;
var guessesSoFar = [];
var hiddenLetter = null;

function newRound() {
	remainingGuesses = 9;
	guessesSoFar.length = 0;
	hiddenLetter = randomLetter();
	console.log("computer letter: ", hiddenLetter);
}

newRound();


function renderGame() {
	var winsContainer = document.getElementById("wins");
	winsContainer.innerText = wins;

	var lossesContainer = document.getElementById("losses");
	lossesContainer.innerText = losses;

	var guesses = document.getElementById("guesses");
	guesses.innerText = remainingGuesses;


	var guessed = document.getElementById("guessed");
	guessed.innerText = guessesSoFar;
}



	renderGame();

	document.onkeyup = function(event) {
			var userLetter = event.key;

			console.log(userLetter);
			console.log(hiddenLetter);


			if (computerChoices.indexOf(userLetter) < 0 ){
			alert("Please choose a letter");

			} else {



				if (userLetter === hiddenLetter) {
					alert("You won!");
					wins++;
					newRound();
					renderGame();

				}
				console.log(wins);

				renderGame();

				if (userLetter !== hiddenLetter) {
					remainingGuesses--;
					guessesSoFar.push(userLetter);
					renderGame();
				}
				console.log(remainingGuesses);
				console.log(guessesSoFar);

				if (remainingGuesses === 0) {
					losses++;
					alert("Sorry, you lost!");
					newRound();
					renderGame();
					
					

					
					

				}

			}




			console.log(losses);
			console.log(wins);
	}