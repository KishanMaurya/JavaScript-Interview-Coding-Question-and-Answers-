const isAnagram = (str1,str2) =>{
    let arr1 = str1.toLowerCase().split("").sort();
    let arr2 = str2.toLowerCase().split("").sort();
    for(let i=0; i< arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}
console.log(isAnagram('Rail Safety', 'fairy tales')); // true
console.log(isAnagram('hello', 'world')); // false
console.log(isAnagram('lisTen', 'silent'))