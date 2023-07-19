const findLongestWord = (words) =>{
  let wordEle = words.split(" ");
    let longWord = ""
    let maxWordCount = 0;
    for(let word of wordEle){
        if(maxWordCount <=  word.length){
            maxWordCount = word.length
            longWord = word
        }
    }
    return longWord
}

console.log(findLongestWord("The quick brown fox jumps over the lazy dog"))

const findLongestWordSecond = (words) => {
  let longWord = "";
  let tempWord = "";
  let maxWordCount = 0;
  let tempCount = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      tempWord += words[i];
      tempCount++;
    } else {
      if (maxWordCount <= tempCount) {
        maxWordCount = tempCount;
        longWord = tempWord;
      }
      tempCount = 0;
      tempWord = "";
    }
  }
  return longWord;
};

console.log(
  findLongestWordSecond("The quick brown fox jumps over the lazy dog")
);
