// Example 1:

// Input: words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"] Output: 2

// Explanation:

// "leetcode" appears exactly once in each of the two arrays. We count this string.
// "amazing" appears exactly once in each of the two arrays. We count this string.
// "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// "as" appears once in words1, but does not appear in words2. We do not count this string. Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b", "bb", "bbb"], words2 = ["a", "aa", "aaa"] Output: 0

// Explanation: There are no strings that appear in each of the two arrays.

// Example 3:

// Input: words1 = ["a", "ab"], words2 = ["a", "a", "a", "ab"] Output: 1

// Explanation: The only string that appears exactly once in each of the two arrays is "ab".



/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
 const countWord = function (words1, words2) {
    let count = 0;
    for(let i=0; i<words1.length; i++){
        let word  = words1[i]
        let firstWordCount = words1.filter(w=> w === word).length
        let secondWordCount = words2.filter(w=> w === word).length

        if(firstWordCount === 1 && secondWordCount === 1){
            count++
        }
    }
    return count
}


const words1 = ["leetcode", "is", "amazing", "as", "is"], words2 = ["amazing", "leetcode", "is"]
console.log(countWord(words1,words2))




/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
const countWords = function (words1, words2) {
	const map1 = new Map()
	const map2 = new Map()
	let totalCount = 0

	words1.forEach((word) => {
		map1.set(word, (map1.get(word) || 0) + 1)
	})

	words2.forEach((word) => {
		map2.set(word, (map2.get(word) || 0) + 1)
	})

	const iterator = map1.keys()
	for (const key of iterator) {
		if (map2.get(key) === 1 && map1.get(key) === 1) {
			totalCount++
		}
	}

	return totalCount
}

export { countWords }
