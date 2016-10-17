var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of gum.'

var mostWordsEndsWith = function(thisSentence) {
  var splitSentence = thisSentence.split(' ');
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','w','x','y'];
  var obj = [];

  for (var i = 0; i < letters.length; i++) {
    if (splitSentence[i].endsWith(letters[i])) {
            obj.push({
              letter: letters[i],
              words : splitSentence[i]
            });
          }
          }
console.log(obj);
}
mostWordsEndsWith(sentence);
