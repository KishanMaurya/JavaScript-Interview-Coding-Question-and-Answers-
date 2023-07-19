function countWords(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      // If the current character is not whitespace and the previous character is whitespace or the beginning of the string, add 1 to the count
      if ((i === 0 || str[i-1] === ' ') && str[i] !== ' ') {
        count++;
      }
    }
  return count;
}
console.log(countWords('hello world')); // 2
console.log(countWords('The quick brown fox jumps over the lazy dog.')); // 9
console.log(countWords('')); // 0
