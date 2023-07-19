const removeSimilarWords = (words) => {
    const uniqueWords = [];
    words.forEach((word) => {
      if (!uniqueWords.includes(word)) {
        uniqueWords.push(word);
      }
    });
    return uniqueWords;
  };
  
  console.log(removeSimilarWords(["leetcode", "is", "amazing", "as", "is"]));
  // Output: ["leetcode", "amazing", "as"]
  