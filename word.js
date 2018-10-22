var Letter = require("./letter");

var letter = new Letter();

function Word (word) {

    this.word = word;
    
    this.lettersArray = function() {

        //var newFormat = [];
        var array = (this.word).split("").map(function(elem){
                 var letterElement = new Letter(elem);
                 return letterElement.getChar();
                 //return letterElement.character;

                });

                console.log(array);

                return array.join(" ");

    //     array.forEach(function(elem){
    //         var newLetter = new Letter(elem);
    //         var newChar = newLetter.character;
    //         newFormat.push(newChar);
    //     });
    //     newFormat.join(" ");
    //     console.log(newFormat.join(" "));
    // };
    //map is another method tha tis really similar to forEach method: 
    // .map(function(elem){
    //     var letterElement = new Letter(elem);
    //     return letterElement.character;
    // });

            }

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


var word = new Word("hello");
// var myLetter = new Letter("e");

var wordString = word.lettersArray();

console.log(wordString);
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