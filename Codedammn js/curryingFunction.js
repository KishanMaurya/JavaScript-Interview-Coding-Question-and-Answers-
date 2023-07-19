// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum(1)(2)(3) === 6; // true
// Explanation: The curried function csum(1)(2)(3) should return the same value as sum(1, 2, 3), which is 6.

// Example 2:

// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum(1, 2)(3) === 6; // true
// Explanation: The curried function csum(1,2)(3) should return the same value as sum(1, 2, 3), which is 6.

// Example 3:

// Input:

// function sum(a, b, c) {
//   return a + b + c;
// }
// const csum = curry(sum);
// Output:

// csum()()(1, 2, 3) === 6; // true


function curryingFunction(a){
    return function(b){
        if(a){
            curryingFunction(a+b)
        }
        return a
    }
}

console.log(curryingFunction(1)(2)(3))