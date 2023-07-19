const divideArray = (arr)=>{
    let chunkArray = []
    let chunkSize = 3;
    for(let i=0; i<arr.length; i+=chunkSize){
        let chunk = arr.slice(i, i + chunkSize);
        chunkArray.push(chunk)
    }
    let resArray = []
    for(let i=0; i<chunkArray.length; i++){
        if(Array.isArray(chunkArray[i])){
            resArray.push(chunkArray[i].reverse())
        }
    }
    return resArray
}
console.log(divideArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// function firstUniqueChar(str) {
//     const charCount = {};
//     for (let char of str) {
//       charCount[char] = charCount[char] + 1 || 1;
//     }
//     for (let char of str) {
//       if (charCount[char] === 1) {
//         return char;
//       }
//     }
//     return null;
//   }
//   const str = "leetcode";
//   const result = firstUniqueChar(str);
//   console.log(result); // Output: "l"


function maxOccurrenceChar(str){
    let charCount = {}
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if(char !==' '){
            charCount[char] = charCount[char] + 1 || 1;
        }
    }
    let max = 0
    let c;
    for(let [key] in charCount){
        if(charCount[key] > max){
            c+=key  
            max = charCount[key];
        }
    }
    console.log(c)
    return `${c, max}`
}
console.log(maxOccurrenceChar("Hello World"))
