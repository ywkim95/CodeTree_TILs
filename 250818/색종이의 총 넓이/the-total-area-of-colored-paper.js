const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please Write your code here.
const coordinates = Array(201).fill(0).map(() => Array(201).fill(0));

for(const rect of rects) {
    const [x, y] = rect;

    for(let i = x; i < x+8; ++i) {
        for(let j = y; j < y+8; ++j) {
            coordinates[i+100][j+100]++;
        }
    }
}

const size = coordinates.reduce((acc, cur) => acc + cur.filter((v) => v > 0).length, 0);
console.log(size);