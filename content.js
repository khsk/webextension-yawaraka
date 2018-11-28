console.time('content.js');

const japanese = require('japanese');
console.log(japanese);
const jaco = require('jaco').default
console.log(jaco)
console.log(new jaco)
console.log(new jaco('カタ').isOnlyKatakana())
console.log(new jaco('かな').isOnlyKatakana())


const relocateTable = require('./relocateTable.js');

const replacefunction = (match, p1, p2, offset, string) => {
    console.log(match, p1, p2, offset, string);
    japanese.romanize(p1)
    return new jaco(match).convertProlongedSoundMarks();
};

// http://cwestblog.com/2014/03/14/javascript-getting-all-text-nodes/
const getTextNodesIn = (elem, opt_fnFilter) => {
  var textNodes = [];
  if (elem) {
    for (var nodes = elem.childNodes, i = nodes.length; i--;) {
      var node = nodes[i], nodeType = node.nodeType;
      if (nodeType == 3) {
        if (!opt_fnFilter || opt_fnFilter(node, elem)) {
          textNodes.push(node);
        }
      }
      else if (nodeType == 1 || nodeType == 9 || nodeType == 11) {
        textNodes = textNodes.concat(getTextNodesIn(node, opt_fnFilter));
      }
    }
  }
  return textNodes;
}

const textNodeFilter = node => {
    return node.textContent !== '';
};


const judgeJapaneseType = (str) => {
    const janob = new jaco(str);
    if (janob) {}
};


/****************************************************************/


console.log(japanese.romanize('あ'));
console.log(document.querySelector('html').textContent.replace(/(.)(ー)/g, replacefunction));


const textNodes = getTextNodesIn(document.querySelector('html'), textNodeFilter);


const replacePattern = /(.)(ー)/g;

textNodes.forEach(textNode => {
    textNode.textContent = textNode.textContent.replace(replacePattern, replacefunction);
});