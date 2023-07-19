function counter() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const increment = counter();
  
  increment(); // logs 1 to the console
  increment(); // logs 2 to the console
  increment(); // logs 3 to the console
  