const findIntersection = (arr1, arr2)=>{
    let result = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    return result
}
// let arr1 =  [1, 3, 4, 5, 7], arr2 = [2, 3, 5, 6]
let arr1 = [2,3,4,5,6,7], arr2=[1,8,9,4,5]
console.log(findIntersection(arr1,arr2))