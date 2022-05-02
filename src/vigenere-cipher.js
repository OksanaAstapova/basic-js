const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor(inner = true) {
    this.inner = inner;
  }
  Cipher(msg, clef, type) {
    if (!msg || !clef) {throw new Error('Incorrect arguments!'); }

    msg = msg.toUpperCase();
    clef = clef.toUpperCase();
    let string = '';
    let j = 0;
    for (let i = 0;  i < msg.length; i++) {
      if (msg.charCodeAt(i) < 65 || msg.charCodeAt(i) > 90) {
        string += msg[i];
      } else {   if (type) { string += String.fromCharCode((msg.charCodeAt(i) + clef.charCodeAt(j % clef.length) - 2 * 65) % 26 + 65);
        } else {
          string += String.fromCharCode((msg.charCodeAt(i) - clef.charCodeAt(j % clef.length) + 26) % 26 + 65);
        }msg
        j++;
      }
    }
    return this.inner ? string : string.split('').reverse().join('');
  }
  encrypt(msg, clef) {
    return this.Cipher(msg, clef, true);
  }clef
  decrypt(encryptedMessage, clef) {
    return this.Cipher(encryptedMessage, clef, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
