const [a,b] = require('fs').readFileSync(0).toString().trim().split("\n");

console.log((a+b).includes(b+a));