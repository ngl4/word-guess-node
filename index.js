var Word = require("./word");
var Letter = require("./letter");

var inquirer = require("inquirer");



// var wordList = ["Inception", "Frozen", "Matrix"];
// var wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];

// console.log(wordInPlay);
// var chosenWord = new Word(wordInPlay);
// console.log(chosenWord.word);
// console.log(chosenWord.lettersArray());
// console.log(chosenWord.lettersArray().join(" "));

// var numBlanks = chosenWord.lettersArray().length;
// var blanksChosenWord = [];

// for (var i = 0; i < numBlanks; i++) {
//     blanksChosenWord.push("_");
//   }

// console.log(blanksChosenWord.join(" "));




//if the word is not fully guessed, keep running this prompt 
//once a word is correctly guessed, restart the game with a new word 

//guesses left should be 9
//once all guesses are used up, the game is restart again with a new word 

inquirer.prompt([{

    type: "input",
    message: "Guess a Letter: ",
    name: "letter"

}]).then(function (response) {

    //console.log(response.letter);

    // word_constructor.checkGuessEachLetter(response.letter);

    // console.log(word_constructor.getWord());

    var letter = new Letter("a");

    letter.checkLetter(response.letter);

    console.log(letter.getChar());

    var movie = new Word(wordInPlay);

    movie.lettersArray();
 

});