//create a Game class with methods for starting
//and ending the game, handling interactions,
//getting random phrases, checking for a win,
// and removing a life counter.
//create game class
class Game {
	constructor(missed, phrases) {
		this.missed = missed;
		this.phrases = phrases;
		this.currentPhrase = null;
	}
	//this method randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase() {
		const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
		return randomPhrase;
	}
	//this method checks to see if the button clicked by the player
	//matches a letter in the phrase.
	//Try a switch statment??

	handleInteraction(button) {
        let letter = button.textContent;
        if (this.currentPhrase.checkLetter(letter)) {
            this.currentPhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            this.removeLife();

        }
    }



	//this method removes a life, removes a heart from the board, and,
	//if the player is out of lives, ends the game.
	removeLife() {
			this.missed++;
			$('.tries').eq(this.missed - 1).hide();
			if (this.missed >= 5 || this.checkForWin()) {
				this.gameOver();

			}
	}
	//this method checks to see if the player has selected all of the letters.
	checkForWin() {
		if($('.letter').length ===  $('.letter.show').length) {
			$('#overlay').addClass('win').show();
			$('#game-over-message').text('You Win');
		}
	}
	//this method displays a message if the player
	// wins or a different message if they lose.
	gameOver(button) {
			$('#overlay').addClass('lose').show();
			$('#game-over-message').text('You Lose');
			$(button).prop('disabled', false)
			$('button.key').removeClass(".chosen");
			//<h1 id="game-over-message"></h1>
		}

	//calls the getRandomPhrase() method, and adds that phrase to the board
	// by calling the Phrase class' addPhraseToDisplay() method.
	startGame() {
		this.currentPhrase = new Phrase(this.getRandomPhrase());
		this.currentPhrase.addPhraseToDisplay();
	}
}
