function solution(inputArray, elemToReplace, substitutionElem) {
    if(inputArray.length < 0) return inputArray
    let arr = []
    for(let i=0; i<inputArray.length; i++){
        if(inputArray && inputArray[i] === elemToReplace){
            arr.splice(i,0,substitutionElem)
        }else{
            arr.push(inputArray[i])
        }
    }
    return arr
}

let inputArray = [1, 2, 1], elemToReplace = 1,  substitutionElem = 3
console.log(solution(inputArray,elemToReplace,substitutionElem))