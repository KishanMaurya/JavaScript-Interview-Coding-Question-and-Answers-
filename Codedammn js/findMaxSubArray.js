const findMaxSubArray = (arr)=>{
    let maxSum = arr[0]
    let currentSum = arr[0]
    let startIndex = 0;
    let tempIndex = 0;
    let endIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > currentSum + arr[i]){
            currentSum = arr[i]
            tempIndex = 1
        }else{
            currentSum = currentSum + arr[i] 
        }
        if(currentSum > maxSum){
            maxSum = currentSum
            startIndex = tempIndex
            endIndex = 1
        }
    }
    return arr.slice(startIndex, endIndex + 1)
}
let arr  = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] Output: [4, -1, 2, 1]
console.log(findMaxSubArray(arr))