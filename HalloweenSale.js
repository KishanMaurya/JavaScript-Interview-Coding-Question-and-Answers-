//p = 20
//d = 3
//m = 6
//s = 70


const halloween = (p,d,m,s)=>{
    let count = 0;
  while (s >= p) {
    count++;
    s -= p;
    p = Math.max(p - d, m);
  }
  return count;
}

console.log(halloween(20,3,6,70))