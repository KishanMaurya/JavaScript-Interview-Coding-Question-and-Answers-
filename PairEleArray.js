const pairEleArray = (arr, target) =>{
    let multiPair = []
    for(let i=0; i<arr.length; i++){
        let singlePair = []
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === target){
                singlePair.push(arr[i], arr[j])
                break;
            }
        }
        if(singlePair.length !==0)
        multiPair.push(singlePair)
    }
    return multiPair
}

console.log(pairEleArray([1,2,3,4,6,7,8,9], 9))