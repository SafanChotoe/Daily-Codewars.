// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// FUNDAMENTALS ARRAYS
function findAverage(array) {
    return array.reduce((acc, curr) => acc + curr) / array.length;
  }