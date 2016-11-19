// MillionGazillion
/* 
  Parameters:
  - crawler that visits web pages
  - stores a few keywords in db
  - follows links to other pages
  - has a set of 'visited' pages (as urls)
  - set is too huge and pc always runs out of memory
   
  Problem:
  - How can trim down amount of space taken up by 'visited'?
  
  - Use a trie to solve
*/


function Trie() {
  this.rootNode = {};
}

Trie.prototype.checkPresentAndAdd = function(word) {
  var newWord = false;
  var curNode = this.rootNode;
  
  for (var i=0; i<word.length; i++) {
    var letter = word[i];
    // if there's no child node, then this is a new word
    // we need to create a pointer to empty child node.
    if (!curNode.hasOwnProperty(letter)){
      newWord = true;
      curNode[letter] = {};
      console.log(letter);
    }
    curNode = curNode[letter];
  }
  
  
  // at this point curNode should be pointed to next avaialable slot
  // if it's a new word.  So we need to insert the EOW node.
  if (newWord) curNode['EOW'] = {}; 
  
  console.log(newWord);
  return newWord;
}


var input = ['google.com', 'facebook.com', 'facebook.com/pon/'];


myTrie = new Trie();
myTrie.checkPresentAndAdd('google.com');
myTrie.checkPresentAndAdd('google.com');
console.log(myTrie.rootNode);