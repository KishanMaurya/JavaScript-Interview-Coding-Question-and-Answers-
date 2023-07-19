// takes an array of integers and returns true if the array is sorted in non-decreasing order, false otherwise:
const isNonDecreasing = (arr)=>{
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}



const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 3, 4];
const isNonDecreasing1 = isNonDecreasing(arr1);
const isNonDecreasing2 = isNonDecreasing(arr2);
console.log(isNonDecreasing1); // output: true
console.log(isNonDecreasing2); // output: false
