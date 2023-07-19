// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

const mergeSortedArray = (arr1,arr2)=>{
    let result = []
    let mergeArray = [...arr1,...arr2]
    for(let i=0; i<mergeArray.length; i++){
        if(mergeArray[i] !== 0){
            result.push(mergeArray[i])
        }
    }
    
    return result.sort((a,b)=> { return a - b})
}

console.log(mergeSortedArray([1,2,3,0,0,0],[2,5,6]))