function counter() {
    let count = 0;
    function increment() {
      count++;
      console.log(count);
    }
    function decrement() {
      count--;
      console.log(count);
    }
    return {
      increment,
      decrement,
    };
  }
  const myCounter = counter();
  myCounter.increment(); // Output: 1
  myCounter.increment(); // Output: 2
  myCounter.decrement(); // Output: 1


//   function outer() {
//     const a = 1;
//     function inner() {
//       const b = 2;
//       console.log(a + b); // Output: 3
//     }
//     return inner;
//   }
//   const closure = outer();
//   closure(); // Output: 3


function outer(){
    const a= 1;
    function inner(){
        const b = 2;
        console.log(a+b)
        function innerDeep(){
            const c = 4;
            console.log(a+b+c)
        }
        return innerDeep
    }
    return inner
}

 outer()
// closure()



// const outer = ()=>{
//     const a=1;
//     function inner(){
//         const b=2;
//         console.log(a+b)
//     }
//     return inner
// }
// const closure = outer();
// console


function outer(){
    const a = 1;
    function inner(){
        const b = 2;
        console.log(a+b);
        function innerDeep(){
            const c = 4;
            console.log(a+b+c);
        }
        return innerDeep;
    }
    return inner;
}

const closure = outer();
closure(); // logs 3 to the console
const innerDeepFn = closure();
innerDeepFn(); // logs 7 to the console
