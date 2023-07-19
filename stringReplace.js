const stringReplace = (str,search,replace) =>{
    let newStr = '';
    for(let i=0; i<str.length; i++){
        if(str.substring(i, i + search.length) === search){
            newStr += replace;
            i += search.length - 1;
        }else{
            newStr += str.charAt(i);
        }
    }
    return newStr;
}
console.log(stringReplace('The quick brown fox jumps over the lazy dog.','o','x'))