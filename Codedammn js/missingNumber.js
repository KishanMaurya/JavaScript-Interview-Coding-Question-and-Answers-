/**
 * @param {number[]} nums
 * @return {number}
 */
 const missingNumber = function (nums) {
    let lenN = nums.length;
    let numbers = (lenN * (lenN + 1)) / 2;

    let sumTotalNums = nums.reduce((a,b)=> a + b, 0);

    return numbers - sumTotalNums
}
console.log(missingNumber([1,2,4,5,6,7,8]))