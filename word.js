var Letter = require("./letter");

function Word (word) {
    
    this.lettersArray = word.split("").map(function(elem){
        var letterElement = new Letter(elem);
        return letterElement.character;
    });

 
};



var word = new Word("hello");
var myLetter = new Letter("e");


console.log(word.lettersArray);

for (i=0; i<(word.lettersArray).length; i++){
    //console.log(word.lettersArray[i]);

    console.log(myLetter.isGuessed(word.lettersArray[i]));

}


//a letter object for the letter "h"
//a letter object for the letter "e"
//a letter object for the letter "l"
//a letter object for the letter "l"
//a letter object for the letter "o"
//all the above is an array for a letter object

//result: an array of new letter objects