const singleNumber = (arr)=>{
    let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]]= result[arr[i]] ? result[arr[i]] +1 : 1;
  }

  for(let key in result){
    if(result[key] === 1){
        return key 
    }
  }
}

console.log(singleNumber([0,1,0,1,0,1,99]))