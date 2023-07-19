const singleNumber = (nums) =>{
    let result = 0;
    for(let num of nums){
        result ^=num
    }
    return result
}

console.log(singleNumber([2,2,4,4,1,1,8]))


/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumbers(nums) {
    let countNumber = {};
    for(let i=0; i<nums.length; i++){
        countNumber[nums[i]] = countNumber[nums[i]] ? countNumber[nums[i]] + 1 : 1;
    }
    let OccuresOnce = Infinity;

    for(let countN in countNumber){
        if(OccuresOnce > countNumber[countN]){
            OccuresOnce = countNumber[countN]
        }
    }
    return OccuresOnce;
}

console.log(singleNumbers([2,2,4,4,1,1,8]))