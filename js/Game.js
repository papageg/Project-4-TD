//create a Game class with methods for starting
//and ending the game, handling interactions,
//getting random phrases, checking for a win,
// and removing a life counter.
//create game class
const phrase = new Phrase;
class Game {

	constructor(missed, phrases) {
		this.missed = missed;
		this.phrases = phrases;
	}

	//this method randomly retrieves one of the phrases stored in the phrases array.
	getRandomPhrase() {
		const randomPhrase = phrases[Math.floor(Math.random() * phrase.length)];
		return randomPhrase;
	}
	//this method checks to see if the button clicked by the player
	//matches a letter in the phrase.
	//Try a switch statment??
	handleInteraction() {

	}
	//this method removes a life, removes a heart from the board, and,
	//if the player is out of lives, ends the game.
	removeLife() {
		if (scoreboard <= 1) {
      scoreboard.remove(scoreboard[0]);
	}
	else {
		alert('Game Over!');
	}
}

	//this method checks to see if the player has selected all of the letters.
	checkForWin() {

	}
	//this method displays a message if the player
	// wins or a different message if they lose.
	gameOver() {}
	//calls the getRandomPhrase() method, and adds that phrase to the board
	// by calling the Phrase class' addPhraseToDisplay() method.
	startGame() {}

}
