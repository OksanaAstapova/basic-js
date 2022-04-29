const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let subStr = email.split('@');
  let res = subStr.splice(-1, 1).join();
  return res;

}

module.exports = {
  getEmailDomain
};
