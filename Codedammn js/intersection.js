const intersection = (nums)=>{
    let intersectionArray = nums[0]
    for(let i=0; i<nums.length; i++){
        let currentArray = nums[i]
        let tempArr = []

        for(let j=0; j<currentArray.length; j++){
            if(intersectionArray.includes(currentArray[j])){
                tempArr.push(currentArray[j])
            }
        }
        intersectionArray = tempArr
    }
    return intersectionArray
}

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))


// [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]] Output: [3,4] 