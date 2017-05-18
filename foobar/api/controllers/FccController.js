/**
 * FccController
 *
 * @description :: Server-side logic for managing fccs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function findLongestWord(sentence) {
    var wordArray = sentence.split(" ");
    wordArray.sort(function(a, b){
        return a.length - b.length;
    });
    return wordArray[wordArray.length];
}

function titleCase(str) {

}

module.exports = {
	findLongestWord: function (req, res) {

    }
};

