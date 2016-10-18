var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of gum.'

var mostWordsEndsWith = function(thisSentence) {
  var splitSentence = thisSentence.split(' ');
  //var emptArr = [];
  var obj = {};
  //var modalWord = ;
  //console.log(modalWord);
  for (var i = 0; i < splitSentence.length; i++) {

        var currentWord = splitSentence[i];

        if (obj[currentWord] === undefined){
            obj[currentWord] = 0;
        }
            obj[currentWord]++

            if (currentWord.endsWith('r')) {
              console.log(currentWord);
            }
    }

//console.log(obj);
//console.log(obj);
}
mostWordsEndsWith(sentence);
