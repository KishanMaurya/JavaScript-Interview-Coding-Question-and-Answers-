// const removeDuplicates = (arr) =>{
//     return [...new Set(arr)]
// }

// console.log(removeDuplicates([1,1,2]))

const removeDuplicates1 = (arr) =>{
    let result = []
    arr.sort((a,b)=>{ return a-b})
    for(let i=0; i<arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}

console.log(removeDuplicates1([1,1,2,9,9]))