const avgSal = (arr)=>{
    arr.sort((a,b)=>{ return a-b })
    let denominator = Math.floor(arr.length / 2)
    let min = arr[0];
    let max = arr[arr.length - 1]
    let addSome = 0;
    let count = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== min && arr[i] !== max){
            count ++;
            addSome += arr[i]
        }
    }
    console.log(addSome, denominator, count)
    return addSome / count
}
let salary = [6000,5000,4000,3000,2000,1000]
// Output: 2500.00000
console.log(avgSal(salary))