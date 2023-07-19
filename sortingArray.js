const sortingArray = (array) =>{
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1]
                array[j+1] = temp;
            }
        }
    }
    return array
}
console.log(sortingArray([3,5,690,7,8,45,67,89]))

// const singleArray = (array) =>{
//     for(let i=0; i< array.length; i++){
//        for(let j=i+1; i< array.length; j++){
//         if(array[i] > array[j]){
//             let temp = array[i];
//             array[i] = array[j];
//             array[j] = temp;
//         }
//        }
//     }
//     return array;
// }
// console.log(singleArray([34,23,11,22,56,67,89,43]))