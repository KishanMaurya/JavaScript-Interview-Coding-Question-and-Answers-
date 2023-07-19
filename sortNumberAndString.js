const mixedArray = ["d", "e", 1, 3, "a", "b", "c", "f", "g", "h", "r", "s", "i", "j", 7, 8, "k", "l", "m", "n", 4, 5, 6, "o", "p", "q", "t", "u", 9, "v", "w", "x", "y", 2, "z"];

// Create two separate arrays for letters and numbers
const letters = mixedArray.filter(item => typeof item === 'string').sort();
const numbers = mixedArray.filter(item => typeof item === 'number').sort((a, b) => a - b);

// Concatenate the two arrays together
const sortedArray = [...numbers, ...letters];

console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


const mixedArray1 = ["d", "e", 1, 3, "a", "b", "c", "f", "g", "h", "r", "s", "i", "j", 7, 8, "k", "l", "m", "n", 4, 5, 6, "o", "p", "q", "t", "u", 9, "v", "w", "x", "y", 2, "z"];

// Sort the array numerically and alphabetically
mixedArray.sort((a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    return a - b; // Sort numbers in ascending order
  } else if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b); // Sort strings alphabetically
  } else if (typeof a === "number") {
    return -1; // Numbers come before strings
  } else {
    return 1; // Strings come after numbers
  }
});

console.log(mixedArray1);
