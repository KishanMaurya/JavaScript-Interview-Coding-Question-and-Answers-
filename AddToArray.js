let array1 = [1,2,3,4,5,6,7,8]
let array2 = [2,3,4,5,6,7,8,9]
let result = []
for(let i=0; i<array1.length; i++){
    for(let j=0; j<array2.length; j++){
        let add = array1[i] + array2[2];
        result.push(add)
    }
}

console.log(result)