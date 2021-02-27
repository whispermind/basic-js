const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
    if(!this.containsArr(arr)){
      return 1;
    }else{
      let max = 0;
      for(let elem of arr){
      if(Array.isArray(elem)){
        let val = 1 + this.calculateDepth(elem);
        if(val > max) max = val;
        }
      }
      return max
    }
  }

  containsArr(arr){
    for(let i = 0; i < arr.length; i++)
      if(Array.isArray(arr[i])) return true
    return false;
  }
};