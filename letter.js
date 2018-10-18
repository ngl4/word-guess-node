
function Letter (char){

    this.character = char;
    this.bool = false;
};

Letter.prototype.getChar = function(){

    if (this.bool) {
        return this.character;
    }else {
        return "_";
    }
}

Letter.prototype.checkLetter = function(charGuessed){

    if (charGuessed === this.character) {
        this.bool = true;

    }else {
        this.bool = false;
    } 
}


module.exports = Letter;


//object-oriented programming
//TODO: figure out whether the letter is 'a character' or simply a 'dash' (symbol)
//TODO: use method to do the above is one way