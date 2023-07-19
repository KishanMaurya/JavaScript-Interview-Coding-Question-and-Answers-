// Input: nums = [2,3,7,5,10]
// Output: [4,10,24,36,56]
// Explanation: 
// For the prefix [2], the conversion array is [4] hence the score is 4
// For the prefix [2, 3], the conversion array is [4, 6] hence the score is 10
// For the prefix [2, 3, 7], the conversion array is [4, 6, 14] hence the score is 24
// For the prefix [2, 3, 7, 5], the conversion array is [4, 6, 14, 12] hence the score is 36
// For the prefix [2, 3, 7, 5, 10], the conversion array is [4, 6, 14, 12, 20] hence the score is 56


const findPrefix = (arr)=>{
    const n = arr.length;
    const ans = Array(n).fill(0);
    let max_val = -Infinity;
    for (let i = 0; i < n; i++) {
        max_val = Math.max(max_val, arr[i]);
        const conver = arr[i] + max_val;
        ans[i] = conver;
    }
    return ans
}

console.log(findPrefix([2,3,7,5,10]))