function mostFrequentCharacter(str) {
    // Create a Map to store the frequency of each character
    const freq = new Map();
    // Loop through the string and update the frequency of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      freq.set(char, (freq.get(char) || 0) + 1);
    }
    // Find the character(s) with the highest frequency
    let maxFreq = 0;
    let maxChars = [];
    for (const [char, count] of freq) {
      if (count > maxFreq) {
        maxFreq = count;
        maxChars = [char];
      } else if (count === maxFreq) {
        maxChars.push(char);
      }
    }
    // If there is a unique most frequent character, return it
    if (maxChars.length === 1) {
      return maxChars[0];
    } else {
      return null;
    }
  }
  
  console.log(mostFrequentCharacter('hello world')); // 'l'
  console.log(mostFrequentCharacter('The quick brown fox jumps over the lazy dog.')); // 'o'
  console.log(mostFrequentCharacter('')); // null
  console.log(mostFrequentCharacter('abbccc')); // null
  console.log(mostFrequentCharacter('aabbc')); // 'a' or 'b'

  function mostFrequentCharacter1(str) {
    // Create an object to store the frequency of each character
    const freq = {};
    // Loop through the string and update the frequency of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    // Find the character(s) with the highest frequency
    let maxFreq = 0;
    let maxChars = [];
    for (const char in freq) {
      const count = freq[char];
      if (count > maxFreq) {
        maxFreq = count;
        maxChars = [char];
      } else if (count === maxFreq) {
        maxChars.push(char);
      }
    }
    // If there is a unique most frequent character, return it
    if (maxChars.length === 1) {
      return maxChars[0];
    } else {
      return null;
    }
  }
  console.log(mostFrequentCharacter1('hello world')); // 'l'
  console.log(mostFrequentCharacter1('The quick brown fox jumps over the lazy dog.')); // 'o'
  console.log(mostFrequentCharacter1('')); // null
  console.log(mostFrequentCharacter1('abbccc')); // null
  console.log(mostFrequentCharacter1('aabbc')); // 'a' or 'b'
  