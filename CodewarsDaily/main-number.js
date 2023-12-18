
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

function multiply(number){
    let digitsOfNum = Math.abs(number).toString().length
    return number * (5** digitsOfNum);
  }

//first we create a variable digitsOfNum
//this variable contains: the absolute value value of number.'
//then turns this into a string.
//then takes the length of this string.
//this length is later used to to raise the 5 x amount of times.
//returns number times (5 to the power of digitsOfNum(the length of the string))