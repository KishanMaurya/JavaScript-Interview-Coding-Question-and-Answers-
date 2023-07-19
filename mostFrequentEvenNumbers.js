function mostFrequentEven(nums) {
    const freq = new Map();
    for (const num of nums) {
        if (num % 2 === 0) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }
    }
    
    if (freq.size === 0) {
        return -1;
    }
    
    let maxFreq = 0;
    let result = -1;
    for (const [num, f] of freq) {
        if (f > maxFreq) {
            maxFreq = f;
            result = num;
        } else if (f === maxFreq && num < result) {
            result = num;
        }
    }
    
    return result;
}
