const palineDrome = (x)=>{
    return x<0 ? false : 121 === +x.toString().split("").reverse().join("")
}

console.log(palineDrome(121))

// Which property of CAP is fulfilled by Mongo?
// What is NOSQL and its advantages over RDBMS
// CAP theorem.
// Merge sort