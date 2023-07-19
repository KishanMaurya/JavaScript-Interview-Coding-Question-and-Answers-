var flat = function (arr, n) {
    let res = arr.flat(n)
    return res
};


let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
let n = 1;

console.log(flat(arr,n))