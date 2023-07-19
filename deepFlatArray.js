const deepArray = (arr, depth = 1)=>{
    let result = []
    for(let el of arr){
      if(Array.isArray(el) && depth > 0){
        result.push(...deepArray(el, depth -1))
      }else{
        result.push(el)
      }
    }
    return result
  }
  let arr = [
      [1,2],
      [3,4],
      [5,6],
      [7,8,[9,0,[7]],10],
      [34,4,5,6,7]
  ]
  console.log(deepArray(arr, 3)) 