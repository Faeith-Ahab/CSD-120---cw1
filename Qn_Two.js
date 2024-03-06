  // Question Two
  
  // Write a javascript function to square numbers
  // For loop 1 to 10
  // Pass each number as argument to square
  // Return value of argument multiplied by itself


  function squaredNumbers(number) {
    return number * number; 
  }
  
  for (let i = 1; i <= 10; i++) {
    const squaredValue = squaredNumbers(i);
   
    console.log(`The square of ${i} is ${squaredValue}`);
  }


