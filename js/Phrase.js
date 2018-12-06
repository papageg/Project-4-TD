//create a Phrase class to handle the creation of phrases
class Phrase {
	constructor(phrase) {
		this.phrase = phrase;
	}
	/*
	this adds letter placeholders to the display when the game starts.
	Each letter is presented by an empty box, one list item for each letter.
	See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts.
	 When the player correctly guesses a letter, the empty box is replaced with a the matched letter (see the showMatchedLetter() method below.
	 Make sure the phrase displayed on the screen doesn't include spaces.
	*/
	addPhraseToDisplay() {
		const phraseList = document.querySelector("#phrase ul");
		const textPhrase = this.phrase;
		let phraseArray = textPhrase.split('');
		phraseArray.forEach(phraseLetter => {
			const li = document.createElement('li');
			phraseList.appendChild(li);
			li.setAttribute('class', 'hide');
			li.textContent = phraseLetter;
			phraseLetter !== ' ' ? li.className = 'letter' : li.className = 'space';
		})
	}
	////////////////////////////////////////////////////////////////////////////
	/***************************************************************************/
	//checks to see if letter selected by player matches a letter in the phrase.
	checkLetter(letter) {
		console.log(letter)
		if (this.phrase.includes(letter)) {
			//this.showMatchedLetter(letter);
		}
	}
	////////////////////////////////////////////////////////////////////////////
	/***************************************************************************/
	// reveals the letter(s) on the board that matches player's selection.
	showMatchedLetter(letter) {
	//	if ($('.letter').textContent === letter) {
			//this.checkLetter.addClassName('show');
			letter.addClassName('show');
	//	}
	}
}
