const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const segments = input.slice(1, k + 1).map(line => line.split(' ').map(Number));

// Please write your code here.

const blocks = Array(n).fill(0);

for(let segment of segments) {
    const [s, e] = segment;
    for(let i = s; i <= e; i++) {
        blocks[i]++;
    }
}

console.log(Math.max(...blocks));