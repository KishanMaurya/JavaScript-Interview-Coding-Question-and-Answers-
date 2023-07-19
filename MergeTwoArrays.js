// program to merge and remove duplicate value from an array
function getUniqueAfterMerge(arr1, arr2){
    let arr = [...arr1, ...arr2];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
const array1 = [1, 2, 3];
const array2 = [2, 3, 5]
// calling the function
getUniqueAfterMerge(array1, array2);

// program to merge and remove duplicate value from an array
function getUniqueAfterMerge(arr1, arr2){
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
const array11 = [1, 2, 3];
const array22 = [2, 3, 5]
// calling the function
// passing array argument
getUniqueAfterMerge(array11, array22);