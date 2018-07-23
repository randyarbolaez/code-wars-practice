/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
*/

/* No Help*/
function friend(friends) {
  return friends.filter(blah => {
    if (blah.length == 4) {
      return blah;
    }
  });
}
/* No Help*/

// I was struggling a little bit, because it wasn't returning but I could console.log it, so I think I understand why it was giving me undefined, it was because I wasn't returning the filter I was just returning the answer in line 11.
