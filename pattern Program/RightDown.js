let rows = 5;
for (let i = rows; i >= 1; i--) {
  let row = '';
  for (let j = rows; j > i; j--) {
    row += ' ';
  }
  for (let k = 1; k <= i; k++) {
    row += '*';
  }
  console.log(row);
}