const intersection = (arr1,arr2) =>{
    let result = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                result.push(arr1[i])
            }
        }
    }
    return result;
}


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const common = intersection(arr1, arr2);
console.log(common); // output: [3, 4, 5]
