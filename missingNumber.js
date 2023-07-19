
const missingNumber =(arr)=>{
    let n = arr.length;
    let nNumbers = n*(n+1)/2;
    let reduceValue = arr.reduce((acc,curr)=> acc + curr)
    return nNumbers - reduceValue
}
console.log(missingNumber([3,0,1]))