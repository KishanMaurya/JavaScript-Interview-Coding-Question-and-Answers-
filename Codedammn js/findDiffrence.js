// Find the Difference of Two Arrays
// In this lab, you have to implement a function findDifference that will take two 0-indexed integer arrays nums1 and nums2. You should return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// The integers in the lists may be returned in any order.


// Using Sets 

const findDiff = (arr1, arr2)=>{
    let diff1, diff2;

    let set1 = new Set(arr1)
    let set2 = new Set(arr2)

    diff1 = [...set1].filter(element=> !set2.has(element))
    diff1 = [...set2].filter(element=> !set1.has(element))

    return [diff1, diff2]
}

console.log(findDiff([1,2,3], [2,4,6]))


const findDifference  = (arr1,arr2)=>{
    let diff1 = arr1.filter(element => !arr2.includes(element))
    let diff2 = arr2.filter(element => !arr1.includes(element))
    return [diff1, diff2]
}


// console.log(findDifference([1,2,3], [2,4,6]));
// Output: [[1,3],[4,6]]

// console.log(findDifference([1,2,3,3], [1,1,2,2]));
 // Output: [[3],[]]



 function findDifferences(arr1, arr2) {
    let difference1 = [];
    let difference2 = [];
  
    // Find elements in arr1 that are not in arr2
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        difference1.push(arr1[i]);
      }
    }
  
    // Find elements in arr2 that are not in arr1
    for (let i = 0; i < arr2.length; i++) {
      let found = false;
      for (let j = 0; j < arr1.length; j++) {
        if (arr2[i] === arr1[j]) {
          found = true;
          break;
        }
      }
      if (!found) {
        difference2.push(arr2[i]);
      }
    }
  
    return [difference1, difference2];
  }
  
  console.log(findDifferences([1, 2, 3], [2, 4, 6]));
  