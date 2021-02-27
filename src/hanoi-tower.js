const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsAmount = 2 ** disksNumber -1, time = Math.floor(turnsAmount * 3600 / turnsSpeed);
  return {
    turns: turnsAmount,
    seconds: time
  }
};
