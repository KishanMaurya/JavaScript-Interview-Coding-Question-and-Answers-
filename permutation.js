// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permute = function(nums) {
    let resArray = []
    for(let i=0; i<nums.length; i++){
        resArray.push([nums[i], nums[i+1-1], nums[nums.length-1]])
    }
    return resArray
};
console.log(permute([1,2,3]))