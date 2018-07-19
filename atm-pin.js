/*
  ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

  If the function is passed a valid PIN string, return true, else return false.
*/

/*No-Help*/
function validatePIN(pin) {
  if (
    (pin.match(/^[0-9]+$/g) != null && pin.length === 6) ||
    (pin.match(/^[0-9]+$/g) != null && pin.length === 4)
  ) {
    return true;
  } else {
    return false;
  }
}
/*No-Help*/

/*Some Help */
function validatePIN(pin) {
  return pin.match(/^\d+$/) != null && (pin.length === 6 || pin.length === 4);
}
/*Some Help */
