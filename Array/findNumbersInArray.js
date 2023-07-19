const findNumbersInArray = (arr, find)=>{
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === find){
            count ++;
        }
    }
    return count
}

const arr = [1, 5, 2, 5, 3, 5, 4];
const find = 5;
const count = findNumbersInArray(arr, find);
console.log(count); // output: 3
