function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        count++;
      }
    }
    return count;
  }
  

console.log(countLetterA('banana')); // 3
console.log(countLetterA('apple')); // 1
console.log(countLetterA('orange')); // 0


function countAs(str) {
    // Use the match() method with a regular expression to find all occurrences of 'a' in the string
    const matches = str.match(/a/gi);
    // Return the length of the matches array
    return matches ? matches.length : 0;
  }
  

  console.log(countAs('banana')); // 3
console.log(countAs('The quick brown fox jumps over the lazy dog.')); // 1
console.log(countAs('hello')); // 0
