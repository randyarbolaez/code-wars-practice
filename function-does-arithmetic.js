/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

The four operators are "add", "subtract", "divide", "multiply".
*/

/*No-Help*/
function arithmetic(a, b, operator) {
  //your code here!
  switch (operator) {
    case 'add':
      return a + b;
      break;
    case 'subtract':
      return a - b;
      break;
    case 'multiply':
      return a * b;
      break;
    case 'divide':
      return a / b;
      break;
    default:
      console.log('blah');
  }
}
/*No-Help*/
