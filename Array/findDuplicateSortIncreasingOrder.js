const findDuplicateSortIncreasingOrder = (arr)=>{
    let unique = []
    let duplicate = []
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }else{
            duplicate.push(arr[i])
        }
    }
    let res = duplicate.sort((a,b)=>a-b)
    return res
}
let arr = [2,3,4,5,5,6,7,2,21,1,1,7,8,9,10]
console.log(findDuplicateSortIncreasingOrder(arr))