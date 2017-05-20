/**
 * FccController
 *
 * @description :: Server-side logic for managing fccs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	findLongestWord: function (req, res) {
	    console.log("longestWord = "+findLongestWord(req.query.sentence));
        res.send(findLongestWord(req.query.sentence));
    }
};

function findLongestWord(sentence) {
    var wordArray = sentence.split(" ");
    wordArray.sort(function(a, b){
        var alength = a.length, blength = b.length;

        // a has a smaller len
        if (alength < blength) {
            return -1;
        }

        // a has a larger len
        if (alength > blength) {
            return 1;
        }

        // they are equal in size
        return a.length - b.length;
    });

    return wordArray[wordArray.length-1];
}

function titleCase(str) {

}

