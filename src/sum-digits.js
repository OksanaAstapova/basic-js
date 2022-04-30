const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let sum = 0;
  let total = 0;
  let digits = String(number);

   for (let i = 0; i < digits.length; i++) {
     sum += Number(digits[i]);
        
    }

  sum = String(sum);
  for (let j = 0; j < sum.length; j++) {
     total += Number(sum[j]);}

    return total;
}

module.exports = {
  getSumOfDigits
};
