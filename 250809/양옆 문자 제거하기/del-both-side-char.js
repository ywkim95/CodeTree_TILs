const str = require('fs').readFileSync(0).toString().trim();
const newStr = str.slice(0,1) + str.slice(2,-2) + str.slice(-1);
console.log(newStr);