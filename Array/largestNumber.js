const largestNumber = (arr)=>{
    let largest = [0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}


const arr = [10, 5, 2, 20, 8];
const largest = largestNumber(arr);
console.log(largest); // output: 20
