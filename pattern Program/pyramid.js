const numRows = 5;

for (let i = 1; i <= numRows; i++) {
  let row = '';
  // add spaces
  for (let j = 1; j <= numRows - i; j++) {
    row += ' ';
  }
  // add stars
  for (let k = 1; k <= i; k++) {
    row += '* ';
  }
  console.log(row);
}
