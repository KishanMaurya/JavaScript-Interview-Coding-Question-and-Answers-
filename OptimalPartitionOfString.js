//store count each char 
// [{
    // a=>1,
    // b=>1,
// }]

const OptimalPartitionOfString = (str)=>{
    let map = new Map();
    for(let i=0; i<str.length; i++){
        map.set(str[i], i)
    }
    return map
}

console.log(OptimalPartitionOfString("abacaba"))