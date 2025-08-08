const arr = require('fs').readFileSync(0).toString().trim().split("\n");
console.log(arr[0].length+arr[1].length)