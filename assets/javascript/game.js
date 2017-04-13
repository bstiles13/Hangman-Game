		$(document).ready(function() {
	
		//Starting Variables
		var options = ["red", "blue", "green", "yellow", "white", "black", "orange", "violet", "olive", "turquoise", "lime", "cyan", "azure", "beige", "lilac", "violet", "white", "cherry", "cream", "purple", "magenta", "indigo", "azure", "coral", "crimson", "ivory", "silver"];
		var random = "";
		var randomArray = [];
		var spacesArray = [];
		var spacesString = "";
		var guesses = [];
		var guessesCorrect = 0;
		var lives = 12;
		var wins = 0;
		var losses = 0;

		//Selects random word (color) from array and pushes underscores to html
		function start() {
			random = options[Math.floor(Math.random() * options.length)];
			randomArray = random.split("");

			console.log(random);

			for (i = 0; i < random.length; i++) {
				spacesArray.push("_");
			}
			spacesString = spacesArray.join(" ");
			document.getElementById("spaces").innerHTML = spacesString;
			console.log(spacesString);
			console.log(randomArray);
		}

		start()


		//Starts game with any key or letter pushed by user
		document.onkeyup = function() {
			//Checks whether user has pressed the key previously. If not then add it to the guesses list and continue
			if (guesses.indexOf(event.key) === -1) {
				guesses.push(event.key);
				document.getElementById("guesses").innerHTML = guesses;
				//If the letter is a match, add it to the guesses list and replace underscore(s)
				if (randomArray.indexOf(event.key) > -1) {
					for (var i = 0; i < randomArray.length; i++) {
						if (randomArray[i] === event.key) {
							spacesArray[i] = event.key
							spacesString = spacesArray.join(" ");
							document.getElementById("spaces").innerHTML = spacesString;
							guessesCorrect++;
							console.log(guessesCorrect);
						}
					}
				//If the letter is wrong, reduce lives by 1 and add the letter to the guesses list
				} else {
					lives--;
					document.getElementById("lives").innerHTML = lives;
				}
			}
			//If the user guesses the word, increase wins by 1, play victory sound, and reset game
			if (guessesCorrect === random.length) {
				wins++;
				document.getElementById("wins").innerHTML = wins;
				new Audio("assets/images/clapping.mp3").play();
				reset();
			//If the user runs out of lives, increase losses by 1, play buzzer sound, and reset game
			} else if (lives === 0) {
				losses++;
				document.getElementById("losses").innerHTML = losses;
				new Audio("assets/images/buzzer.mp3").play();
				reset();
			}
		}
			//Reset function that is called if user wins or loses
			function reset() {
				random = "";
				randomArray = [];
				spacesArray = [];
				spacesString = "";
				guesses = [];
				guessesCorrect = 0;
				lives = 12;
				
				document.getElementById("guesses").innerHTML = "none";
				document.getElementById("lives").innerHTML = lives;

				start();
			}

		});
