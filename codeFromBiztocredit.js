let, const, var
----------------------

function print() {
   var a = 2000;
   let b = 100;
   const c = 150;
}


print();

console.log(a); // a is not define
console.log(b); // b is not define
console.log(c); // c is not define

---------------------------

let a = [1,2,3,4];
let b = a;
b[1] = 200;
console.log(a);
console.log(b); 


// a = [1,200,3,4]
// b = [1,200,3,4]

------------------------------

const arrayFun = ()=>{
  
}
--------------------------------------

let str = 'hello everyone';

// { h:1, e:4, l:2, ... }

const countStr = (str) =>{
  let strObj = {}
  for(let i=0; i< str.length; i++){
    if(strObj[str[i]]){
      strObj[str[i]] = + strObj[str[i]];
    }else{
      strObj[str[i]] = 1;
    }
  }
  return str;
}

console.log(countStr(str));

------------------------------------------

Node Module Wrapper Function


package.json
//package-lock.json


name: "^1.2.3"
name: "~1.2.3"

-------------------------------------------
  
let print = () => {
  console.log('Hello!!');
}  

route.use(print)
route.post('/', (res, req, next){
           next()
})

------------------------------------------

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

console.log(3);


//1,3,2
//1 2 3




























































