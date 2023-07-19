
const findDuplicate = (arr) =>{

    // let storeD = [];
    // for(let i=0; i<arr.length; i++){
    //     if(storeD.includes(i)){
    //         return i
    //     }
    // }

    for(i=0; i<arr.length; i++){
        if(arr[i] === arr[i+1]){
            return arr[i]
        }
    }
}

console.log(findDuplicate([1,3,4,2,2]))