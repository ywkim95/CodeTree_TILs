const [str, fin] = require('fs').readFileSync(0).toString().trim().split("\n");

console.log(str.indexOf(fin) ?? -1);