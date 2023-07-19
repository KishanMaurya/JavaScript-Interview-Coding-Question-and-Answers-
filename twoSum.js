

const twoSum =(arr, target)=>{
    for(let i=0; i<arr.length; i++){
        console.log(arr[i])
        for(let j=i+1; j<arr.length; j++){
            console.log("----",arr[i], arr[j])
            if(arr[i]+ arr[j] === target){
                console.log(i, j)
                return i,j
            }
        }
    }
}
let arr= [2,9,11,7], target = 9
console.log(twoSum(arr, target))