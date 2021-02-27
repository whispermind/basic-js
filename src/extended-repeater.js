const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(!String(str)) return false
  if(options.repeatTimes && !options.separator) options.separator = '+';
  if(options.addition && !options.additionSeparator) options.additionSeparator = '|';
  if(options && !options.repeatTimes) options.repeatTimes = 1;
  if(options.additionSeparator && !options.additionRepeatTimes) options.additionRepeatTimes = 1;
  let newStr = '';

    for(let i = 0; i < options.repeatTimes; i++){
      newStr += str
      if(String(options.addition)){
        for(let y = 0; y < options.additionRepeatTimes; y++){
          newStr += String(options.addition)
          if(y != options.additionRepeatTimes - 1) newStr += String(options.additionSeparator)
        }
      }
      if(i != options.repeatTimes - 1) newStr += String(options.separator)
    }
    return newStr;
  }

