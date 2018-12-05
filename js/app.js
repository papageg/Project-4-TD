let game = new Game;
const phrases = ['this is first', 'this is second', 'this is third'];
//this function hides the start screen overlay.
function resetDisplay() {
	document.getElementById("overlay").style.display = "none";
}
//this function is called when a player selects a letter.
//It disables the button on the onscreen keyboard and calls
//the handleInteraction() method of the Game class.
// function markButton() {
//   document.addEventListener('click', button => {
//     button.target.disabled = true;
//     game.handleInteraction()
//     });
//   }
/***************************************************************/
/////////////////////////////////////////////////////////////////
// Get all the buttons
const buttons = document.querySelectorAll('.key');
//loop through buttons to add event listener to each one
for (let button of buttons) {
	button.addEventListener('click', function() {
		//call markButton method and pass in the button
		markButton(button);
	})
}
markButton(button) {
	// disable the button
	// pass the button to the game.handleInteraction() method
	button.disabled = true;
	game.handleInteraction(button)
}
// inside the game.handleInteraction() method, use .textContent to get the value of the letter inside the button that the user intended to click.
// send this string value to the phrase.checkLetter() method
/////////////////////////////////////////////////////////////////
/***************************************************************/
//Add an event listener to the "Start Game" button which calls
// the resetDisplay() function, creates a new Game object,
// and starts the game.
//Add event listeners to each of the keyboard buttons, so that clicking
// a button calls the markButton() function.
//Add an event listener to the "Start Game" button which calls
// the resetDisplay() function, creates a new Game object,
// and starts the game.
document.getElementById("btn__reset").addEventListener("click", (e) => {
	markButton();
	resetDisplay();
	game = new Game(0, phrases);
	game.startGame();
});
