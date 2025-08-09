const str = require('fs').readFileSync(0).toString().trim();

const idx = str.indexOf('e');

const newStr = str.slice(0, idx) + str.slice(idx+1);
console.log(newStr)