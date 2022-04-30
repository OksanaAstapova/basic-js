const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(array) {
  
  if (!Array.isArray(array)){throw new Error ("'arr' parameter must be an instance of the Array!");}
  
  let transformArray = array.slice();
  for (let i = 0; i < transformArray.length; i++) {
    if (transformArray[i] === "--discard-prev" && i !== 0) {
      transformArray.splice(i - 1, 1);
    }
    if (transformArray[i] === "--discard-next") {
      transformArray.splice(i + 1, 1);
    }
    if (transformArray[i] === "--double-prev" && i !== 0) {
      transformArray.splice(i, 1, transformArray[i - 1]);
    }
    if (transformArray[i] === "--double-next") {
      transformArray.splice(i, 1, transformArray[i + 1]);
    }
  }
   
  
  transformArray = transformArray.filter(
    (item) =>
      item !== "--double-prev" &&
      item !== "--double-next" &&
      item !== "--discard-prev" &&
      item !== "--discard-next" &&
      item !== undefined
  );
  return transformArray;
} 

   


module.exports = {
  transform
};
