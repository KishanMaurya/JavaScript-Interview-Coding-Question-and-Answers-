/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let top = 0, left = 0;
    let right = m -1, bottom = n - 1;
    let ans = []
    while(top <= bottom && left<=right){
    for(let i= left; i<= right; i++){
        ans.push(matrix[top][i])
    }
    top++;
    for(let i=top; i<=bottom; i++){
        ans.push(matrix[i][right])
    }
    right--;
    for(let i=right; i>=left; i--){
        ans.push(matrix[bottom][i])
    }
    bottom--;
    for(let i= bottom; i>=top; i--){
        ans.push(matrix[i][left])
    }
    left++
    }   
    return ans
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(matrix))


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return [];
    const result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}
