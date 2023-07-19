// // Async/await is a programming language feature that allows developers to write asynchronous code in a synchronous manner.

// // "Async" is short for "asynchronous," which refers to code that doesn't block the execution thread. 
// Asynchronous code allows other code to continue executing while waiting for a long-running operation, 
// such as reading data from a database or making an HTTP request, to complete.

// // "Await" is used to pause the execution of the current method until an asynchronous operation completes.
//  This allows the code to wait for the result of the asynchronous operation without blocking the execution thread.

// // Here is an example of using async/await in JavaScript:

async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  }
  
  getData().then(data => console.log(data));
  