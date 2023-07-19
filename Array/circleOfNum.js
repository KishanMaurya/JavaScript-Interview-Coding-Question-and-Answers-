function circleOfNumbers(n, firstNumber) {
    // Calculate the number opposite to firstNumber using modulo arithmetic
    const oppositeNumber = (firstNumber + n/2) % n;
    
    return oppositeNumber;
  }
  