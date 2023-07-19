

//     new Map vs Object

//     new Set() 

//     [1,2,3,4,[5,6,[{​​7}​​],8,9,10]

//     [1,2,3,4,[5,6,[{​​a:7, b:7.1}​​, ],8,9,10]


const arr = [1,2,3,4,[5,6,[{a:7, b:7.1}, ],8,9,10]];

function sumNumbers(arr) {
  let sum = 0;
  arr.forEach(element => {
    if (Array.isArray(element)) {
      sum += sumNumbers(element);
    } else if (typeof element === 'object' && element !== null) {
      sum += sumNumbers(Object.values(element));
    } else if (typeof element === 'number') {
      sum += element;
    }
  });
  return sum;
}
console.log(sumNumbers(arr)); // Output: 62.1
