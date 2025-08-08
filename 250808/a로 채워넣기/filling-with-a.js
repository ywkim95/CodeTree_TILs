let str = require('fs').readFileSync(0).toString().trim();

str = str.slice(0,1) + 'a' + str.slice(2,-2) + 'a' + str.slice(-1);
console.log(str);