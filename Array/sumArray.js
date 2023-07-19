const sumArray = (arr) =>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum +=arr[i]
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
const total = sumArray(arr);
console.log(total); // output: 15
