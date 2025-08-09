const [n, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n");

const sumStr = arr.reduce((acc,cur) => acc + +cur, 0).toString();

console.log(`${sumStr.slice(1)}${sumStr.slice(0,1)}`);