const result = require('fs').readFileSync(0).toString().trim().split("\n").map((v) => v.replaceAll(" ", "")).join("");
console.log(result);