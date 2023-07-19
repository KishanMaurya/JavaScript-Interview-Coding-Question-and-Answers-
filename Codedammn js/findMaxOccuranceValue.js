const findMaxOccurrence = (str)=>{
    let countStr = {}
    for(let i=0; i<str.length; i++){
        countStr[str[i]] = countStr[str[i]] ? countStr[str[i]] + 1: 1;
    }
    let maxCount = 0;
    let key
    let minCount = Infinity;
    let minKey
    let secondMax = 0;
    let secondKey
    for(let ele in countStr){
        if(maxCount < countStr[ele]){
            maxCount = countStr[ele]
            key = ele
        }
        if(minCount > countStr[ele]){
            minCount = countStr[ele]
            minKey = ele
        }
        if (countStr[ele] < maxCount && countStr[ele] > secondMax) {
            secondMax = countStr[ele];
            secondKey = ele
        }
    }
    return `MaxOccur=> ${key}:${maxCount}, MinOccur => ${minKey}:${minCount}, secondMaxOccur => ${secondMax} : ${secondKey}`
}
let args= "hello world"
console.log(findMaxOccurrence(args))
