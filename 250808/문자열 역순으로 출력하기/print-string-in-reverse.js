const arr = require('fs').readFileSync(0).toString().trim().split("\n");
let result = arr.slice(1).reduce((acc, cur) => `${cur}\n${acc}`,arr[0]);

console.log(result);