const sumPositiveNum = (nums)=>{
    let count = 0
    for(let i=1; i<=nums; i++){
        console.log(i)
        count +=i
    }
    return count
}

console.log(sumPositiveNum(100))