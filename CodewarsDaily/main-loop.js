// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// FUNDAMENTALSSTRINGSARRAYS

function sumMix(arr){
    let sum = 0
    arr.map((element) => {
      sum += Number(element)
    })
    return sum
  }