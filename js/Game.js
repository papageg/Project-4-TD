//create a Game class with methods for starting
//and ending the game, handling interactions,
//getting random phrases, checking for a win,
// and removing a life counter.

class Game {
  var phrases = [];
  function Misphrase(missed, phrases) {
    constructor() {
      this.missed = missed;
      this.phrases = phrases;
    }
  }

  //this method randomly retrieves one of the phrases stored in the phrases array.
  getRandomPhrase() {
    let rando = phrases[Math.floor(Math.random() * phrases.length)];
  }


  //this method checks to see if the button clicked by the player
  //matches a letter in the phrase.
  handleInteraction() {
    if(button.click() === phrases.forEach()){
      showMatchedLetter(phrases);
      checkForWin();
    } else {
      removeLife();
    }
  }

}
