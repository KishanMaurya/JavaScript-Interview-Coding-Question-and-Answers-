const containsDuplicate  = (nums)=>{
    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let count = nums.filter((n)=> n === num).length
        console.log("----", count)
        if(count > 1){
            return true
        }
    }
    return false
}
let nums = [1,1,1,1,3,3,4,3,2,4,2] 
console.log(containsDuplicate(nums))