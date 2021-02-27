const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  let arr = [];
  for(let name of members){
    if(typeof name != 'string') continue
    arr.push(name.trim()[0].toUpperCase());
  }
  return arr.sort().join('');
};
