// Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

// Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

// Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

// Examples:
// [0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
// [9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
function getMissingElement(superImportantArray){
    for (i = 0; i < 10; i++) {
      if (superImportantArray.indexOf(i) === -1) return i;
    }
  }
//the for loop loops 10 times.
//if one of those times the index with the looped i element of the array is equal to -1, it means that the element has not been found in the array.
//then the function will return this i element.