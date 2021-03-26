const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(arr) === false) {
    throw new Error();
  }
  let res = [];
  for (let i = 0; i<arr.length; i++){
    if (arr[i] == '--discard-next'){
      if(i < arr.length){
        res.push(undefined);
        i+=1;
      }
    }
    else if(arr[i] == '--discard-prev'){
      if(i > 0){
        res.pop();
      }
    }
    else if(arr[i] == '--double-next'){
      if(i<arr.length-1){
        res.push(arr[i+1]);
      }
    }
    else if(arr[i] == '--double-prev'){
      if(i > 0){
        res.push(res[res.length-1]);
      }
    }
    else {
      res.push(arr[i]);
    }
  }
  let result = res.filter(function(x) {
    return x !== undefined
  })
  return result;
};
