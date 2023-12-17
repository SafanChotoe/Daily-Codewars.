// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

// FUNDAMENTALS
function sameCase(a, b){
    //first statement checks if either a or b is not a letter.
    //If a is not a letter, it is both upper and lowercase, in case of JS.
    //so if first or is true or second is true, then a or b is not a letter.
    //this statement is first in line, because it checks first if a and b are letters or not.
    if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
       return -1
    //checks if a is a letter in lower or uppercase and b is a letter in lower or uppercase.
    //this would mean that both are letters in the same case
     }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
         return 1
     }
     //none of above,because both are letters, but not in same case.
     else{
       return 0
     }
   }