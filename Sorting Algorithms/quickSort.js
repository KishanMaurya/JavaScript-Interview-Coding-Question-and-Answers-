const quickSort = (arr)=>{
    if(arr.length <= 1) return arr
    let pivot = arr[Math.floor(arr.length/2)];
    let left = [];
    let right = [];
    let equal = [];
    for(let el of arr){
        if(el < pivot){
            left.push(el)
        }else if(el > pivot){
            right.push(el)
        }else{
            equal.push(el)
        }
    }
    return [...quickSort(left), ...equal, ...quickSort(right)]
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));