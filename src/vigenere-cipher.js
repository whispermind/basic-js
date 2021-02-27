const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool){
    if(typeof bool == 'boolean') this.reverse = bool;
    else this.reverse = true;
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error();
    let string = this.getString(message.toUpperCase(), key.toUpperCase(), true);
    return this.reverse? string : string.split('').reverse().join('');
  }
  decrypt(message, key) {
    if(!message || !key) throw new Error();
    let string = this.getString(message.toUpperCase(), key.toUpperCase(), false);
    return this.reverse? string : string.split('').reverse().join('');
  }
  getString(message, key, bool){
    let string = '';
    for(let i = 0, y = 0; i < message.length; i++){
      if(y == key.length) y = 0
      if(message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90){ string += this.getSymbol(message[i], key[y], bool); y++}
      else string += message[i];
    }
    return string
  }
  getSymbol(strChar, keyChar, bool) {
    let charCode
    if(bool){
        charCode = strChar.charCodeAt(0) + keyChar.charCodeAt(0) - 65;
        if(charCode > 90) charCode -= 26;
    }else{
      charCode = 65 + strChar.charCodeAt(0) - keyChar.charCodeAt(0);
      if(charCode < 65) charCode = 91 - (65 - charCode);
    }

    return String.fromCharCode(charCode);
  }
}

module.exports = VigenereCipheringMachine;


