/*Check Coupon */

/*Overdid it */
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  ) {
    return `You can use this coupon!`;
  }

  return `This coupon expired!`;
}

checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014');
/*Overdid it */

//At first I over did it, manually converting currentDate and expirationDate, until I realized that 'Date.parse' exist.
