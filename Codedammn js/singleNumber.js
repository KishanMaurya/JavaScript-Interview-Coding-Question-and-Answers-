const singleNumber = (nums)=>{
    let result = []
    for(let i=0; i<nums.length; i++){
        if(!result.includes(nums[i])){
            result.push(nums[i])
        }else{
            result.pop()
        }
    }
    return result
}

console.log(singleNumber([2,2,4,4,1,1,8]))