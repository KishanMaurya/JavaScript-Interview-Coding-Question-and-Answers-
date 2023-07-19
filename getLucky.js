/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let num = '';
  for (let i = 0; i < s.length; i++) {
    num += (s.charCodeAt(i) - 96).toString();
  }
  for (let i = 0; i < k; i++) {
    let sum = 0;
    for (let j = 0; j < num.length; j++) {
      sum += parseInt(num[j]);
    }
    num = sum.toString();
  }
  return parseInt(num);
    
};

console.log(getLucky("iiii", 1))


// Min Deletions to Make Frequency of Each Letter Unique
// Min Swaps to Make Palindrome
// Min Steps to Make Piles Equal Height
// Largest K such that both K and -K exist in array
// Max Length of a Concatenated String with Unique Characters
// Unique Integers That Sum Up To 0
// Partition array into N subsets with balanced sum
// Jump Game [Experienced]
// Meeting Rooms II
// Count Visible Nodes in Binary Tree
// Largest Alphabetic Character


// 161928157