const getMedian = (arr)=>{
    let sortedArray = arr.sort((a,b)=>{ return a-b })
    let minIndex = Math.floor(sortedArray.length/2);
    if(sortedArray.length % 2 === 0){
        return (sortedArray[minIndex  -1] + sortedArray[minIndex]) / 2
    }
    else{
        return sortedArray[minIndex]
    }
}


const arr = [1, 2, 3, 4, 5];
const median = getMedian(arr);
console.log(median); // output: 3

const arr2 = [1, 2, 3, 4, 5, 6];
const median2 = getMedian(arr2);
console.log(median2); // output: 3.5
