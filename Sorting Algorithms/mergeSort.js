const mergeSort =(array)=>{
    if(array.length <= 1) return array
    let midIndex = Math.floor(array.length / 2)
    let left = array.slice(0, midIndex)
    let right = array.slice(midIndex)
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
    let result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result,...left,...right]
}
console.log(mergeSort([3, 6, 8, 10, 1, 2, 1]))