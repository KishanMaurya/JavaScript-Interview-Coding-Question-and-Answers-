function countOccurrences(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      counts[element] = counts[element] ? counts[element] + 1 : 1;
    }
    let maxKey = '';
    let maxVal = -Infinity;

    for (const key in counts) {
      const val = counts[key];
      if (val > maxVal) {
        maxVal = val;
        maxKey = key;
      }
    }
    return `${maxKey} : ${maxVal}`
  }
  
  // Test the function with example input
  const fruits = ["apple", "banana", "apple", "orange", "banana", "pear"];
  const data = ["+1A","-3A","+1A","-5A"]
  console.log(countOccurrences(data)); // Output: {apple: 2, banana: 2, orange: 1, pear: 1}
  

let peaple = [
  { name : "Anil", age:21},
  { name : "Rahul", age:20},
  { name : "Neha", age:20}
]





  
// Group items on the basis of age of given array of object

  
  
  // Output
  // {
  //   '20': [{ name: 'Rahul', age: 20 }, { name: 'Neha', age: 20 },
  //   '21': [{ name: 'Anil', age: 21 )}]
  // }
  
    
  

  
  
  
  
  