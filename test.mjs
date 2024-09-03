// test.mjs

// Function to calculate the sum of two numbers
function addNumbers(a, b) {
  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    // String with double quotes
    console.log('Both arguments must be numbers'); // Logging with double quotes
    return;
  }

  // Calculate the sum
  const sum = a + b;

  // Return the result
  return sum;
}


// Function to print the result
function printResult(result) {
  console.log('Result:', result); // Logging with double quotes
}

// Test the functions
const result = addNumbers(5, '10'); // Intentional issue: passing a string instead of a number

printResult(result);
