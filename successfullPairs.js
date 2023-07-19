// Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
// Output: [4,0,3]
// Explanation:
// - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.
// - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.
// - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.
// Thus, [4,0,3] is returned.
// 2300. Successful Pairs of Spells and Potions

const pairs = (arr, potions, success)=>{
    let xxArray = []
    let resArray = []
    for(let i = 0; i<arr.length; i++){
        let xArray = []
        for(let j = 0; j<potions.length; j++){
            let x = arr[i] * potions[j]
            xArray.push(x)
        }
        xxArray.push(xArray)
    }
    for(let x = 0; x<xxArray.length; x++){
        let count = 0
        for(let y = 0; y<xxArray[x].length; y++){
            console.log("----",xxArray[x][y])
            if(xxArray[x][y] >= success){
                count++
            }
        }
        resArray.push(count)
    }
    return resArray
}



const pairss = (arr, potions, success) => {
    let resArray = [];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < potions.length; j++) {
        let x = arr[i] * potions[j];
        if (x >= success) {
          count++;
        }
      }
      resArray.push(count);
    }
    return resArray;
  };
  
  console.log(pairss([3, 1, 2], [8, 5, 8], 16));
  
console.log(pairs([3,1,2],[8,5,8],16))