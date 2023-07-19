function countRepeatedChars(str) {
    let charCount = {};
    let repeatedChars = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] === 2) {
        repeatedChars[char] = 2;
      } else if (charCount[char] > 2) {
        repeatedChars[char]++;
      }
    }
    return repeatedChars;
  }
  let str = "hello world";
  let repeatedChars = countRepeatedChars(str); // returns { l: 3, o: 2 }
  console.log(repeatedChars)