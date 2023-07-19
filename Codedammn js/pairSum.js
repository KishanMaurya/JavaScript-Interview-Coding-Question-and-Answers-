//anagram


const anagram = (str1, str2)=>{
    let s1 = str1.length;
    let s2 = str2.length;

    if(s1 !== s2){
        return false
    }

    let sstr1 = s1.split('').sort().join('')
    let sstr2 = s2.split('').sort().join('')

    if(sstr1 === sstr2){
        true
    }
}


console.log(anagram('marry', ''))


hoistedVariable = 3; 
console.log(hoistedVariable); 
// outputs 3 even when the variable is declared after it is initialized    
var hoistedVariable;