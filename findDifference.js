var findDifference = function(nums1, nums2) {
    let diffA = []
    let diffB = []
    for(let num of nums1){
        if (!nums2.includes(num) && !diffA.includes(num)) {
            diffA.push(num);
        }
    }
    for(let num of nums2){
        if (!nums1.includes(num) && !diffB.includes(num)) {
            diffB.push(num);
        }
    }
    return [diffA, diffB]
};
let nums1 = [1,2,3], nums2 = [2,4,6];
// Output: [[1,3],[4,6]]
console.log(nums1, nums2)


