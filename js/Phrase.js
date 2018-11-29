//create a Phrase class to handle the creation of phrases

class Phrase {
	constructor(phrases) {
		this.phrases = phrases;
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
		let phraseArray = textPhrases.split('');h
		getRandomPhrase();
		textPhrase.forEach()(phraseLetter => {
			const li = document.createElement('li');
			phraseList.appenChild(li);
			li.setAttribute('class', 'hide');
			li.textContent = phraseLetter;
      phraseLetter !== ' ' ? li.className = 'letter' : li.className = 'space';
		})
		//       <div id="phrase" class="section">
		//     <ul>
		//         <li class="hide letter h">h</li>
		//         <li class="hide letter o">o</li>
		//         <li class="hide letter w">w</li>
		//         <li class="hide space"> </li>
		//         <li class="hide letter a">a</li>
		//         <li class="hide letter r">r</li>
		//         <li class="hide letter e">e</li>
		//         <li class="hide space"> </li>
		//         <li class="hide letter y">y</li>
		//         <li class="hide letter o">o</li>
		//         <li class="hide letter u">u</li>
		//     </ul>
		// </div>
	}
	////////////////////////////////////////////////////////////////////////////
	/***************************************************************************/
	//checks to see if letter selected by player matches a letter in the phrase.
	checkLetter() {

	}
	////////////////////////////////////////////////////////////////////////////
	/***************************************************************************/
	// reveals the letter(s) on the board that matches player's selection.
	showMatchedLetter() {
		console.log('ggg');
	}
}
