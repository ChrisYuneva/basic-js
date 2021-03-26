const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dream = [];
  if(!Array.isArray(members)) {
    return false; 
  }
  for (let i = 0; i<members.length; i++){
    if(typeof(members[i]) == 'string') {
      dream.push(members[i].trim().split('')[0]);
    }
  }
  return dream.join('').toUpperCase().split('').sort().join('');
}