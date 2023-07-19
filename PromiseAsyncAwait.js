// // Promises and async/await are both ways to handle asynchronous code in JavaScript, 
// but they differ in syntax and usage.

// // Promises were introduced in ES6 as a way to handle asynchronous code in a more 
// organized and manageable way. A Promise represents 
// the eventual completion (or failure) of an asynchronous operation and allows you 
// to chain multiple operations together in a more readable way.

// // Async/await is a newer syntax introduced in ES8 that provides a more 
// intuitive way to write asynchronous code by using keywords async and await. 
// The async keyword is used to define an asynchronous function, and the await 
// keyword is used to pause the execution of an async function until a Promise is resolved.

// // Here are some of the key differences between Promises and async/await:

// // Syntax: Promises use .then() and .catch() methods to handle asynchronous operations, 
// while async/await uses the async and await keywords to handle Promises.

// // Error handling: With Promises, you have to use the .catch() method to handle errors. 
// With async/await, you can use a try...catch block to handle errors.

// // Readability: async/await can make asynchronous code more readable and easier to understand, 
// especially for beginners who may struggle with chaining multiple Promises together.

// // Compatibility: Promises are supported in older browsers and environments,
//  while async/await requires a newer version of JavaScript.

// Promise-based syntax:

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


//   Async/await syntax:

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();
  