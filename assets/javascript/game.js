var str = "abcdefghijklmnopqrstuvwxyz";
var computerChoices = str.split("");



var wins = 0;
var losses = 0;
var gesLeft = 9;
var userGuesses = [];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



var winsText = document.getElementById("wins-text")
var lossesText = document.getElementById("losses-text");
var gesText = document.getElementById("ges-text");
var gesLeftText = document.getElementById("ges-left");





document.onkeyup = function (event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);


    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if (userGuess === computerGuess) {
        wins++;
        alert("You guessed the right letter! Congratulations!");
        gesLeft = 9;
    }
    else {
        gesLeft--;
    }
    if (gesLeft === 0) {
        losses++;
        gesLeft = 9;
    }





    // console.log(wins);
    // console.log(losses);
    // console.log(gesLeft);


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses " + losses;
    gesLeftText.textContent = "Guesses Left " + gesLeft;
    gesText.textContent = "Your guesses so far " + userGuesses;

}
