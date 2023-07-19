function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  console.log(insertionSort([3, 6, 8, 10, 1, 2, 1]));