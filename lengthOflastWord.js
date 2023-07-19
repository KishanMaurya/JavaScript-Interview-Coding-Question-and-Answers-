function lengthOfLastWord(s) {
    // Trim any whitespace from the end of the string
    s = s.trim();
    console.log(s)
    // Find the last space in the string
    const lastSpaceIndex = s.lastIndexOf(" ");
    console.log(lastSpaceIndex)
    
    if (lastSpaceIndex === -1) {
      // If there are no spaces in the string, return the length of the string
      return s.length;
    } else {
      // Otherwise, return the length of the substring after the last space
      return s.slice(lastSpaceIndex + 1).length;
    }
  }
  const s = "   fly me   to   the moon  ";
const length = lengthOfLastWord(s);
console.log(length); // Output: 4
