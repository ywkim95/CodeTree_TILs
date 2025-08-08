const arr = require('fs').readFileSync(0).toString().trim().split("");
arr[1] = 'a';
arr[arr.length-2] = 'a';
console.log(arr.join(""));