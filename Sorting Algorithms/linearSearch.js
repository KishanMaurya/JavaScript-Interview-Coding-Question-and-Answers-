function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
  return -1;
}
const arr = [1, 3, 5, 7, 9];
const val = 7;
const index = linearSearch(arr, val);
console.log(index); // Output: 3
