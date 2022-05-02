const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let count = 1;

  for (let num of array) {
    let depth = 1;
    if (Array.isArray(num)){
    depth += this.calculateDepth(num);
  }
  if (depth>count){
    count = depth;
  }
  }  
  return count;

  }
}

module.exports = {
  DepthCalculator
};
