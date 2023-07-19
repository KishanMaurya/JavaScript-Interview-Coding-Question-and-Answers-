const runningSum = (nums) =>{
    let n = 0
    let ar = []
    for(let i=0; i<nums.length; i++){
        n += nums[i]
        ar.push(n)
    }
    return ar
}
console.log(runningSum([1,2,3,4]))