
const singleNumber = (arr)=>{
    let count = {}
    let res = []
    for(let i=0; i<arr.length; i++){
        count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
    }
    for(let key in count){
        if(count[key] === 1){
            res.push(parseInt(key)) 
        }
    }
    return res
}
console.log(singleNumber([1,2,1,3,2,5]))