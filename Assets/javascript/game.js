// Psychic Game JS
// Note to self: See codeschool js3 slides/tutorials for how we got these functions together!

//Letter choices available
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Note to self: figure out how to set an array for user guesses for the future. Placeholder:
// var userGuess

// set variables all to 0 except guesses and guessesLeft, which represent the # of guesses granted to user.
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//Computer selects a random letter from the available choices from "computerChoices" array:
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// Note to self  See codeschool slides for js3 course for these functions and syntax

var updateGuessesLeft = function() {
  // how guessesLeft will be displayed in html
  document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // This is guesses the user has tried, displayed as letters in box in html. 
  document.querySelector("#pick").innerHTML = "Your Guesses So Far: " + guessedLetters.join(', ');
};
// Function will be called upon reset. "Update DOM" -See also http://stackoverflow.com/questions/12022552/how-do-i-tell-javascript-to-immediately-update-the-dom
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

//When key is released it registers the user's guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  // var userGuess=computerChoices;


  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Good job! Yes, you might be psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // if user doesn't guess any correctly, this will update the html and tell user s/he lost.
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, none right! You are probably not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};
