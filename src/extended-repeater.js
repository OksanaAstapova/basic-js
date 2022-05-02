const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let stack = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    let strAdd = String(options.addition);
    stack.push(strAdd);
  }

  let string = stack.join(options.additionSeparator || '|');

  if (string.length > 0) {
    stack.length = 0;

    for (let j = 0; j < options.repeatTimes; j++) {
      stack.push(String(str) + string);
    }

  } else {
    if (!options.repeatTimes) {
      stack.push(String(str) + String(options.addition));
    } else {
      for (let j = 0; j < options.repeatTimes; j++) {
        if (!options.addition) stack.push(String(str)); 
        else stack.push(String(str) + String(options.addition));
      }
    }

  }

  return stack.join(options.separator || '+');
}

module.exports = {
  repeater
};
