// Map vs forEach

//Both map and forEach are higher-order functions in JavaScript that allow you to iterate over arrays. 
//However, they differ in their functionality and how they handle the values in the array.

//map returns a new array with the transformed values, without changing the original array.

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8]


//forEach, on the other hand, is used to iterate over an array and perform some action on each value.
//  It takes a function as an argument that is applied to each element of the array. 
//  The function receives three arguments: the current element, its index, and the original array. 
//  forEach doesn't return anything and modify the original array.

// const numberss = [1, 2, 3, 4];
// numberss.forEach(number , index => number[index] = number+3);
// Output:
// 3
// 5
// 6
// 7


//null vs undefined

// null is a special object because typeof null returns 'object'. 
// On the other hand,
// undefined means that the variable has not been declared,
// or has not been given a value.


// Flat Array and recursion


let arr = [
    [1,2],
    [3,4],
    [5,6],
    [7,8,[9,0,[7]],10],
    [34,4,5,6,7]
]
console.log(arr.flat(3))
//using recursion
const deepArray = (arr, depth = 1)=>{
    let result = []
    arr.forEach((arr)=>{
        if(Array.isArray(arr) && depth > 0){
            result.push(...deepArray(arr, depth -1))
        }else result.push(arr)
    })
    return result;
}
console.log("Custom Flat Array=>",deepArray(arr,3))


// var vs let vs const

//var: Variables declared with var are function-scoped, 
//which means that they are accessible throughout the entire function in which they are declared. 
//If var is used outside of a function, it is globally scoped. Also, var can be re-declared and reassigned. 

//let: Variables declared with let are block-scoped, 
//which means that they are accessible only within the block they are declared in (e.g., a loop or an if statement). 
//let cannot be re-declared within the same scope, but it can be reassigned.

//const: Variables declared with const are also block-scoped and cannot be reassigned after they are declared. 
//However, they can still be mutated if they are objects or arrays


//setTimeOut

for(var i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 100)
}
//5,5,5,5,5

for(let i=0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    }, 100)
}

//0,1,2,3,4

for(var i=0; i<5; i++){
   (function(j){
    setTimeout(()=>{
        console.log(j)
    }, 100)
   })(i)
}
//0,1,2,3,4,

//call, bind and apply


// bind(someobj) -> does not invoke the function, it just allows you to 
// bind whatever object you want, you have to call the function yourself.

// .call(someobj) and .apply(someobj)-> both invoke the function 
// immediately,and modify the context. 
// The only difference is how you pass your
// own arguments. See below

// .call(someobj, param1, param2)
// .apply(someobj, [param1, param2])


// Promise.all() in JavaScript. Promise.all() is a method that takes an array of promises and returns a new promise 
//that resolves when all the promises in the array have resolved or rejects when any one of the promises rejects.

function PromiseAll(promises) {
    return new Promise(function(resolve, reject) {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('arguments must be an array'));
      }
  
      var resolvedCount = 0;
      var results = [];
  
      promises.forEach(function(promise, index) {
        Promise.resolve(promise).then(function(result) {
          resolvedCount++;
          results[index] = result;
  
          if (resolvedCount === promises.length) {
            return resolve(results);
          }
        }).catch(function(error) {
          return reject(error);
        });
      });
    });
  }
  var promise1 = Promise.resolve(1);
  var promise2 = Promise.resolve(2);
  var promise3 = Promise.resolve(3);
  
  PromiseAll([promise1, promise2, promise3]).then(function(results) {
    console.log(results); // [1, 2, 3]
  }).catch(function(error) {
    console.error(error);
  });

  
//   This implementation creates a new promise and returns it. It first checks if the input argument is an array,
// and if not, it rejects the promise with a TypeError. It then initializes a counter to keep track of how many
// promises have resolved, and an array to store the results.

// Middleware 

// Middleware function can perform any necessary processing on the request and response objects, 
// such as modifying headers or reading data from the request body,
// before passing control to the next middleware function.
// This allows for modular and reusable code, as multiple middleware 
// functions can be chained together to perform different tasks in a specific order.



var person={
  name:{
    firstName:"Joe"
     }
}

var emp="name.firstName"
var value="Joe"



const deepObject = (emp, value)=>{
    let str= emp.split('.')
  console.log(str)
    let Obj ={}
    if(Array.isArray(str)){
        Obj[str[0]] = { }
    }
  return Obj
}

console.log(deepObject(emp, value))



// create array nested array 

const deepArrays = (arr)=>{
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      sum +=deepArrays(arr[i])
    }
     else {
      sum += arr[i];
    }
  }
  return sum 
}
let a = [[1,2,3], [34, 56,67,[90,78]]]
console.log(deepArrays(a, 3))


// factorial 
 // let a = 4;

// 4*3*2*1 = 24 


// function facto(n){
    
//     if(n <=1) {
//       return 1
//     }else{
//       return n * facto(n-1)
//     }
    
// }

// console.log(facto(4))

