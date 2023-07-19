// Sample Input

// STDIN           Function
// -----           --------
// 6               arr[] size n = 6
// 7 1 3 4 1 7     arr = [7, 1, 3, 4, 1, 7]
//output = 3

const minimumDis = (arr)=>{
    // if(arr.length < 0) return 0
    let resArray = []
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                console.log(arr[i], arr[j], i,j)
                let x = Math.abs(i-j)
                resArray.push(x)
            }
        }
    }
    if(resArray.length === 0) return -1
    return Math.min(...resArray)
}

console.log(minimumDis([1 ,2, 3, 4, 10]))