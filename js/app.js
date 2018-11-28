 const phrases = ['this is first', 'this is second', 'this is third'];

function handleInteraction() {
  if (checkLetter()) {
      phrase.showMatchedLetter();
      this.checkForWin();
    } else {

      removeLife();
    }
}

function checkLetter() {

}


//this function hides the start screen overlay.
function resetDisplay() {
  document.getElementById("overlay").style.display = "none";
}
//this function is called when a player selects a letter.
//It disables the button on the onscreen keyboard and calls
//the handleInteraction() method of the Game class.
function markButton() {
  document.addEventListener('click', button => {
    button.target.disabled = true;
    handleInteraction()
  })
  }



//Add an event listener to the "Start Game" button which calls
// the resetDisplay() function, creates a new Game object,
// and starts the game.
//Add event listeners to each of the keyboard buttons, so that clicking
// a button calls the markButton() function.




//Add an event listener to the "Start Game" button which calls
// the resetDisplay() function, creates a new Game object,
// and starts the game.
document.getElementById("btn__reset").addEventListener("click", resetDisplay);
markButton();
