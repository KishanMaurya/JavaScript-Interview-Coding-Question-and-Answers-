const productArraySum = (arr)=>{
    let res = []
    let countIndex = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]==countIndex){
            res.push(arr[i] * arr[i])
        }
    }
    return res
}

console.log(productArraySum([1,2,3,4]))