var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of gum.'

var mostWordsEndsWith = function(thisSentence) {
    //define variables (THRIVE ON VARIABLES!!)
    var splitSentence = thisSentence.split(' ');
    var letterOccuranceArr = [];
    var wordsArr = [];
    var objOutput = [];

    var obj = {};

    var commonWordArr = [];
    var mostCommonLetter = '';

    //for-loop
    for (var i = 0; i < splitSentence.length; i++) {
        var currentWord = splitSentence[i];
        wordsArr.push(currentWord);
        var EndLetters = currentWord[currentWord.length - 1];

        if (obj[EndLetters] === undefined) {
            obj[EndLetters] = 0;
        }
        obj[EndLetters]++
    }

    //for in loop to push items to object
    for (var x in obj) {
        letterOccuranceArr.push(obj[x]);
    }

    //Get the highest value in array with numbers of letter occurences
    var highVal = Math.max.apply(null, letterOccuranceArr);

    //for in loop through object to get most common key
    for (var key in obj) {
        if (obj[key] == highVal) {
            mostCommonLetter = key;
        }
    }

    //add the words ending with the most common letter in array
    for (var word in wordsArr) {
        if (wordsArr[word].endsWith(mostCommonLetter)) {
            commonWordArr.push(wordsArr[word]);
        }
    }

    //store final output in var
    var output = 'The most common letter: ' + mostCommonLetter;
    var output2 = ' - words: ' + commonWordArr.join(' , ');

    //concat output
    return output + output2
}
const assert = require('assert');

var test = mostWordsEndsWith(sentence);

assert.deepEqual(test, 'The most common letter: t - words: that , but , packet , that , racket , packet')

console.log(mostWordsEndsWith(sentence));
