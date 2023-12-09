function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
//function takes in array
//if array has more than 1 element: return instructions.
//instructions: max minus min number. First round return answer. Then repeat until no more number left.
//all returns will be added up.