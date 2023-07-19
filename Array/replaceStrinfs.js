// For inputString = "crazy", the output should be solution(inputString) = "dsbaz"
function solution(inputString) {
    let str = ""
    for(let i=0; i < inputString.length; i++){
        let char = inputString[i]
        if(char !== "z"){
            let inc = char.charCodeAt(0) + 1;
            let nextChar = String.fromCharCode(inc).toLowerCase();
            str+=nextChar;
        }else{
            let inc = 97;
            let nextChar = String.fromCharCode(inc).toLowerCase();
            str+=nextChar;
        }
    }
    return str
}

console.log(solution("crazy"))