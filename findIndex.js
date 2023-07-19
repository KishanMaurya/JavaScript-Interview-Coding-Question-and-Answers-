const findIndex = (array,value)=>{
    console.log(array)
    let index;
    for(let i=0; i<array.length; i++){
        console.log(array[i])
        if(array[i] === value){
            index = i
            console.log(index)
            break;
        }
    }
    return index
}

console.log(findIndex[90,56,45,34,65,76,87],65)