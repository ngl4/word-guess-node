
function Letter (char){

    this.character = char;
    //this.bool = bool;
};

Letter.prototype.isGuessed = function(charGuessed){
    //if the charGuessed is the same as the character
    //return true 
    //it is not the same 
    //return false 
    if (charGuessed === this.character) {
        //this.bool = true;
        return this.character;
    }else {
        //this.bool = false;
        return "_";
    }
}

// var myLetter = new Letter("a");

// console.log(myLetter);
// console.log(myLetter.isGuessed("a"));
// console.log(myLetter.isGuessed("b"));


module.exports = Letter;


//object-oriented programming
//TODO: figure out whether the letter is 'a character' or simply a 'dash' (symbol)
//TODO: use method to do the above is one way