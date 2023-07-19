const findMultiMissingNum = (nums)=>{
    let maxNum = Math.max(...nums)
    let minNum = Math.min(...nums)

    let missingNum = []

    for(let i = minNum ; i<= maxNum; i++){
        if(!nums.includes(i)){
            missingNum.push(i)
        }
    }
    return missingNum
}
console.log(findMultiMissingNum([1, 2, 4, 5, 7, 8, 10]))