const arr = require("fs").readFileSync(0).toString().trim().split("\n").map((v) => v.length);
arr.sort((a, b) => a-b);
console.log(arr[2] - arr[0]);
