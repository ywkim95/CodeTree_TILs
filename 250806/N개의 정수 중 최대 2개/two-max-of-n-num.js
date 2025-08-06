const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const numArr = arr.split(" ").map(Number).sort((a,b) => b-a);
console.log(`${numArr[0]} ${numArr[1]}`);
