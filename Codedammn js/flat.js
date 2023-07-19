// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
// const n = 0;
// const result = flat(arr, n);
// console.log(result);
// // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

const flat = (arr, n)=>{
    return arr.flat(n)
}
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 1;
console.log(flat(arr,n))