/*
Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

Give your answer in string format as 'odd' or 'even'.
*/

/*No-Help*/
function oddOrEven(array) {
  var blah = array.reduce((a, b) => a + b, 0);
  if (blah % 2 == 0) {
    return 'even';
  } else if (blah % 2 == -1 || blah % 2 == 1) {
    return 'odd';
  }
}
/*No-Help*/
