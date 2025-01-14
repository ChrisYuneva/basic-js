const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!';
  try {
    date.getDate();
  } catch(error) {
    throw new Error(error); 
  }
  let month = Date.prototype.getMonth.call(date);
  if(month > 1 && month < 5) {
    return 'spring';
  }
  else if(month > 4 && month < 8){
    return 'summer';
  }
  else if (month > 7 && month < 11){
    return 'autumn';
  }
  else if(month == 11 || month == 0 || month == 1) {
    return 'winter';
  }
};
