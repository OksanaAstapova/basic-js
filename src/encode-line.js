const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  
  let encodeStr = " ";
  let quantity = 1;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]){
      quantity++;
      encodeStr += quantity + string[i];

    } else {
      quantity = 1;
    encodeStr += quantity + string[i];

    }

  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
