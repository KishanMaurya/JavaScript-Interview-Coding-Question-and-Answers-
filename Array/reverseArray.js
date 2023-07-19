const reverseArray = (arr)=>{
    let result = []
    for(let i=arr.length-1; i >=0; i--){
        result.push(arr[i])
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const reversed = reverseArray(arr);
console.log(reversed); // output: [5, 4, 3, 2, 1]
