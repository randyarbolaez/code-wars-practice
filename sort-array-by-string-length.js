/*
  Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
*/

function sortByLength(array) {
  var blah = array.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else {
      return -1;
    }
  });

  return blah;
}
