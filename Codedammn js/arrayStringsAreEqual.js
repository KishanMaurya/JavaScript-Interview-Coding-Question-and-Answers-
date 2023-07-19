const arrayStringsAreEqual = (word1,word2) =>{
    let w1 = ""
    let w2 = ""
    for(let i=0; i<word1.length; i++){
        w1 +=word1[i]
    }

    for(let i=0; i<word2.length; i++){
        w2 +=word2[i]
    }
    if(w1 === w2){
        return true
    }
    return false
}


const word1 = ["a", "cb"];
const word2 = ["ab", "c"];
// arrayStringsAreEqual(word1, word2); // Output: true
console.log(arrayStringsAreEqual(word1,word2))