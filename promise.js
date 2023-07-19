
// Promise.all([new Promise((resolve, reject) => resolve('hi'))), 1])



const promise1 = new Promise((resolve, reject) => resolve('hi'));
const promise2 = Promise.resolve(1);

Promise.all([promise1, promise2])
  .then(([result1, result2]) => {
    console.log(result1); // Output: 'hi'
    console.log(result2); // Output: 1
  })
  .catch(error => {
    console.error(error);
  });


//   new Promise((resolve, reject) => reject('error')).cache(err => console.log(error))

const promise = new Promise((resolve, reject) => reject('error'));
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });


//   Promise is an object that represents a value that may not be available yet, but will be at some point in the future. It is used for asynchronous programming, where you want to execute a task in the background without blocking the main thread of execution.

// A Promise has three states:

// Pending: The initial state when the Promise is created and its value is not yet available.
// Fulfilled: The Promise has been resolved, and its value is available.
// Rejected: The Promise has been rejected, and an error occurred.
// You can create a Promise using the Promise constructor, which takes a single argument: a function that takes two parameters, resolve and reject.
// Inside this function, you can write the code that will eventually resolve or reject the Promise. 
//The resolve function is used to return a value when the Promise is fulfilled, 
//while the reject function is used to throw an error when the Promise is rejected.

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hello, world!');
    }, 1000);
  });

  myPromise
  .then((value) => {
    console.log(value); // Output: Hello, world!
  })
  .catch((error) => {
    console.error(error); // Handle the error
  });
