// const findRestaurant=(list1, list2)=>{
//     let result = []
//     for(let i=0; i<list1.length; i++){
//         for(let j=0; j<list2.length; j++){
//             if(list1[i] === list2[j]){
//                 let indexSum = i + j
//                 if(indexSum === 1){
//                     result.push(list1[i])
//                 }
//             }
//         }
//     }
//     return result
// }
// let list1 = ["happy","sad","good"];
// let list2 = ["sad","happy","good"];

// console.log(findRestaurant(list1, list2))


const findRestaurant = (list1, list2) =>{
    let map = new Map();
    for(let i=0; i<list1.length; i++){
        if(list2.includes(list1[i])){
            map.set(list1[i],i)
        }
    }
    for(let i=0; i<list2.length; i++){
        if(list1.includes(list2[i])){
            map.set(list2[i], i)
        }
    }
    return map
}
let list1 = ["happy","sad","good"];
let list2 = ["sad","happy","good"];
console.log(findRestaurant(list1,  list2))



function findRestaurant(list1, list2) {
    const map = new Map();
    let minIndexSum = Infinity;
    const result = [];
  
    for (let i = 0; i < list1.length; i++) {
      map.set(list1[i], i);
    }
  
    for (let i = 0; i < list2.length; i++) {
      if (map.has(list2[i])) {
        const indexSum = i + map.get(list2[i]);
        if (indexSum < minIndexSum) {
          result.length = 0;
          result.push(list2[i]);
          minIndexSum = indexSum;
        } else if (indexSum === minIndexSum) {
          result.push(list2[i]);
        }
      }
    }
    return result;
}