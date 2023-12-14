
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function sumOfArrays(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, curr) => acc + curr)
}

//function takes in two arrays.
//returns: 
//arr1 and arr2 are merged together and make another array.
//this result of an array is then put through reduce.
//reduce goes through every element. 
//every element is then counted up together, starting from zero.
//the end result is then returned