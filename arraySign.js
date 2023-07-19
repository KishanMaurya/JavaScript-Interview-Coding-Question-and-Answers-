/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product = nums.reduce((a, b) => a * b); // get the product of all values in the array
  if (product > 0) {
    return 1;
  } else if (product < 0) {
    return -1;
  } else {
    return 0;
  }
};

let nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

console.log(arraySign(nums))