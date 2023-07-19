function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    // str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    // Loop over the characters and compare with corresponding characters from end
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(isPalindrome('racecar')); // true
// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome('hello world')); // false
// console.log(isPalindrome('')); // true
