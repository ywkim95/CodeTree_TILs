const str = require('fs').readFileSync(0).toString().trim();
console.log(str.slice(1) + str.slice(0,1));