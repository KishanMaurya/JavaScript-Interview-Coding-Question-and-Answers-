// *****
// *****
// *****
// *****
// *****

let n = 5; 
let string = "";
for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  string += "\n";
}
console.log(string);


