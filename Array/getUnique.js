const getUniqueElements = (arr) =>{
    let result = [];
    for(let i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
const arr = [1, 2, 3, 2, 4, 5, 1, 6, 7, 5];
const uniqueArr = getUniqueElements(arr);
console.log(uniqueArr); // output: [3, 4, 6, 7]
