var Letter = require("./letter");

var letter = new Letter();

function Word(word) {

    this.word = word;

    this.lettersArray = function () {
        var array = (this.word).split("").map(function (elem) {
            var letterElement = new Letter(elem);
            return letterElement;
        });
        return array;
    }

    this.getWord = function () {
        var string = [];
        this.lettersArray().forEach(function (elem) {
            if (elem.checkLetter())
            var eachChar = elem.getChar();
            string.push(eachChar);
            // console.log(elem.bool);
        });
        return string.join(" ");
    }

    this.checkGuessEachLetter = function (elem) {
        //letter.checkLetter(char);
        //letter.getChar();
        //console.log(this.lettersArray());
        var string = [];
        this.lettersArray().forEach(function (letter) {
            //console.log(letter);
            console.log(letter.checkLetter(elem));
            if (letter.checkLetter(elem)) {
                var char = letter.getChar();
                string.push(char);

            }else {
                var char = letter.getChar();
                string.push(char);
            }


        });

        return string.join(" ");

    }

};

module.exports = Word;


var word = new Word("hello");
// var myLetter = new Letter("e");

var wordString = word.lettersArray();
var wordBeingChecked = word.checkGuessEachLetter("e");

//console.log(wordString);
console.log(wordBeingChecked);

var wordAfterGuess = word.getWord();
// console.log(wordAfterGuess);

// console.log(word.lettersArray);

// for (i=0; i<(word.lettersArray).length; i++){
//     //console.log(word.lettersArray[i]);

//     console.log(myLetter.checkGuess(word.lettersArray[i]));

// }


//a letter object for the letter "h"
//a letter object for the letter "e"
//a letter object for the letter "l"
//a letter object for the letter "l"
//a letter object for the letter "o"
//all the above is an array for a letter object

//result: an array of new letter objects