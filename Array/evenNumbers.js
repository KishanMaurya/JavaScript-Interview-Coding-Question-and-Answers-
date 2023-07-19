const evenNumbers = (arr) =>{
    let result = [];
    for(let i=0; i< arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i])
        } 
    }
    return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = evenNumbers(arr);
console.log(evens); // output: [2, 4, 6, 8, 10]
