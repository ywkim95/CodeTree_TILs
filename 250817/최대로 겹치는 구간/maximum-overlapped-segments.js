const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];
for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
const blocks = Array(201).fill(0);

for(const segment of segments) {
    const [s, e] = segment.map((v) => v+100);
    for(let i = s+1; i <= e; i++) {
        blocks[i]++;
    }
}

console.log(Math.max(...blocks));