var Letter = require("./letter");

var letter = new Letter();

function Word (word) {

    this.word = word;
    
    this.lettersArray = function() {

        return (this.word).split("");

    }
    
    // .map(function(elem){
    //     var letterElement = new Letter(elem);
    //     return letterElement.character;
    // });

    this.getWord = function() {
        var string =[];
        this.lettersArray().forEach(function(elem){
            var eachChar = letter.getChar(elem);
            string.push(eachChar);
        }); 
        return string.join(" ");  
    }

    this.checkGuessEachLetter = function(char) {
        letter.checkLetter(char);
        //letter.getChar();
        console.log("letter checked!");

    }

 
};

module.exports = Word;


// var word = new Word("hello");
// var myLetter = new Letter("e");


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