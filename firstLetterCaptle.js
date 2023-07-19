function capitalizeFirstLetter(str) {
    const words = str.split(' '); // split the string into an array of words
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1); // capitalize the first letter of the word
    }
    return words.join(' '); // join the array of capitalized words back into a string
  }
  
  const inputStr = "this is a sample string";
  const outputStr = capitalizeFirstLetter(inputStr);
  console.log(outputStr); // Output: "This Is A Sample String"
  