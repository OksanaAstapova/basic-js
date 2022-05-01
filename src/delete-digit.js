const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  number = String(number);
  let stor = [];

  for (let i = 0; i < number.length; i++) {
    let arr = number.split('');
    arr.splice(i, 1);
    stor.push(+arr.join(''));
  }
  stor = Math.max(...stor);
  return stor;
}

module.exports = {
  deleteDigit
};
