/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
*/

/* No Help*/
function sumTwoSmallestNumbers(numbers) {
  //Code here
  let blah = numbers.sort((a, b) => a - b);
  return blah[0] + blah[1];
}
/* No Help*/

//Wasn't difficult.
