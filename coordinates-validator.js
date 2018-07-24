/*
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.
*/

/*Confused*/
function isValidCoordinates(coordinates) {
  if (
    coordinates[0] >= 90 &&
    coordinates[0] <= -90 &&
    (coordinates[1] >= 180 && coordinates[1] <= -180)
  ) {
    return true;
  } else {
    return false;
  }
}
/*Confused*/

//The codewars test said it's wrong, but I don't think so.
