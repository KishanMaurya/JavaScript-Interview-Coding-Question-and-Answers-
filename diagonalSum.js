/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;
    for(let i=0; i<n; i++){
        sum+= mat[i][i];
        if (i != n-i-1) { // check if element is not on secondary diagonal
            sum += mat[i][n-i-1]; // add element on secondary diagonal
        }
    }
    return sum
};
console.log(diagonalSum(
    [[1,2,3]
    ,[4,5,6],
     [7,8,9]]

    ))