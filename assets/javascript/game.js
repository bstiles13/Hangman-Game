		$(document).ready(function() {
	
		//Starting Variables
		var options = ["red", "blue", "green", "yellow", "white", "black", "orange", "violet", "olive", "turquoise", "lime", "cyan", "azure", "beige", "lilac", "violet", "white", "cherry", "cream"];
		var random = "";
		var randomArray = [];
		var spacesArray = [];
		var spacesString = "";
		var guesses = [];
		var guessesCorrect = 0;
		var lives = 12;
		var wins = 0;
		var losses = 0;

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

		document.onkeyup = function() {
			//Checks whether user has pressed the key previously. If not then add it to the guesses list and continue
			if (guesses.indexOf(event.key) === -1) {
				guesses.push(event.key);
				document.getElementById("guesses").innerHTML = guesses;
				//If the letter matches a letter in the word
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
				//If the letter is wrong
				} else {
					lives--;
					document.getElementById("lives").innerHTML = lives;
				}
			}
			if (guessesCorrect === random.length) {
				wins++;
				document.getElementById("wins").innerHTML = wins;
				new Audio("assets/images/clapping.mp3").play();
				reset();
			} else if (lives === 0) {
				losses++;
				document.getElementById("losses").innerHTML = losses;
				new Audio("assets/images/buzzer.mp3").play();
				reset();
			}
		}

			function reset() {
				random = "";
				randomArray = [];
				spacesArray = [];
				spacesString = "";
				guesses = [];
				guessesCorrect = 0;
				lives = 12;
				
				document.getElementById("guesses").innerHTML = guesses;
				document.getElementById("lives").innerHTML = lives;

				start();
			}

		});
