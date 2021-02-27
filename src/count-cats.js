const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
for(arr of matrix)
  arr.forEach(element => element == '^^'? counter++:false);

return counter
};
