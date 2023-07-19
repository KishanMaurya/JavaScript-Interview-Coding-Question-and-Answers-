


const kidsCandies = (arr, candies) =>{
    let arrSize = Math.max(...arr);
    console.log(arrSize)
    for(let i=0; i<arr.length; i++){
        if(arr[i] + candies >= arrSize){
            arr[i] = true
        }else{
            arr[i] = false
        }
    }
    return arr
}

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
console.log(kidsCandies([2,3,5,1,3], 3))