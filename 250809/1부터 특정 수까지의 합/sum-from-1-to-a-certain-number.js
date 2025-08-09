const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

let result = 0;

for(let i = 0; i < n; ++i) {
    result += i+1;
}

console.log(parseInt(result/10));