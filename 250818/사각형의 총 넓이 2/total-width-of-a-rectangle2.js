const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rects = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
const coordinates = Array(201).fill(0).map(() => Array(201).fill(0));

for(const line of rects) {
    const [x1, y1, x2, y2] = line;
    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            coordinates[i+100][j+100]++;
        }
    }
}

const size = coordinates.map((coord) => coord.filter(v => !!v).length).reduce((acc, cur) => acc + cur, 0);
console.log(size);