const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error();
  let execArr = JSON.parse(
    JSON.stringify(
      arr,
      function (key, value) {
        if(value !== value) return 'NaN'
        if(value === Infinity) return 'Infinity'
        if(value === -Infinity) return '-Infinity'
        if(value === undefined) return 'undefined'
        return value;
      }),
    function(key, value){
      if(value === 'NaN') return NaN
      if(value === 'Infinity') return Infinity
      if(value === '-Infinity') return -Infinity
      if(value === 'undefined') return undefined
      return value
  });
  commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  for(let i = 0; i < execArr.length; i++){
    switch(execArr[i]){
      case commands[0]:
        !commands.includes(execArr[i+1]) && i != execArr.length-1? execArr.splice(i + 1, 1) : null; break;
      case commands[1]:
        !commands.includes(execArr[i-1]) && i != 0? execArr.splice(--i, 1) : null;  break;
      case commands[2]:
        !commands.includes(execArr[i+1]) && i != execArr.length-1? execArr.splice(i + 1, 0, execArr[i+1]) : null; break;
      case commands[3]:
        !commands.includes(execArr[i-1]) && i != 0? execArr.splice(i-1, 0, execArr[i++ -1]) : null; break;
    }
  }
  return execArr.filter(elem => !commands.includes(elem));
};

