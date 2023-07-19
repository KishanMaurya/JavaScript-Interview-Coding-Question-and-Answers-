// Examples
// Example 1:

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1] Output: [0,4,1,3,2] Explanation:

// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]
// Example 2:

// Input: nums = [1,2,3,4,0], index = [0,1,2,3,0] Output: [0,1,2,3,4] Explanation:

// nums       index     target
// 1            0        [1]
// 2            1        [1,2]
// 3            2        [1,2,3]
// 4            3        [1,2,3,4]
// 0            0        [0,1,2,3,4]
// Example 3:

// Input: nums = [1], index = [0] Output: [1]


const createTargetArray = (nums, index)=>{
    let result = []
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<index.length; j++){
            // console.log(i,j)
            if(i === j){
                console.log(i,j)
                result.splice(index[j],0, nums[i])
            }
        }
    }
    return result
}
// Output: [0,4,1,3,2]
let nums = [1,2,3,4,0], index = [0,1,2,3,0]
console.log(createTargetArray(nums, index))