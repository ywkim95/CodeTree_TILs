const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
const result = [];
for(let i = 1; i <= n; i += 2) {
    const mid = parseInt(i/2);
    let temp = arr.slice(0,i).sort((a,b) => a-b);
    result.push(temp[mid]);
}

console.log(result.join(" "));