// nums = [3,2,2,3], val = 3

const removeElement = (arr, val)=>{
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== val){
            count ++;
            arr[count] = arr[i]
        }
    }
    return count;
}

console.log(removeElement([3,2,2,3],3))