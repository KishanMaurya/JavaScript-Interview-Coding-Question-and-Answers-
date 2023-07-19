function solution(cell1, cell2) {
    // Extract the row and column numbers for each cell
    const [row1, col1] = [parseInt(cell1[1]), cell1.charCodeAt(0) - 64];
    const [row2, col2] = [parseInt(cell2[1]), cell2.charCodeAt(0) - 64];
    
    // Check if the sum of the row and column numbers is even for both cells
    return (row1 + col1) % 2 === (row2 + col2) % 2;
}
