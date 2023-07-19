const RemoveSimilarEle = (ele)=>{
    let eleCount  = {}
    let result = []
    let value = 1
    for(let i=0; i<ele.length; i++){
        eleCount[ele[i]] = eleCount[ele[i]] ? eleCount[ele[i]] + 1 : 1;
    }
    for(let eleItem in eleCount){
        if(eleCount[eleItem] <= value){
           result.push(parseInt(eleItem))
        }
    }
    return result
}

let ele = [2,2,1,3,4,5,5]
//output = [1,3,4,5]
console.log(RemoveSimilarEle(ele))