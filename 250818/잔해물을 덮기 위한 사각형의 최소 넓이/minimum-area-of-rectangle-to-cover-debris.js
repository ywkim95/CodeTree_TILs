const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);

// Please Write your code here.
const coordinates = Array(2001).fill(0).map(() => Array(2001).fill(0));

function drawRect(rect, value = 1) {
    const [x1, y1, x2, y2] = rect;
    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            coordinates[i+1000][j+1000] += value;
        }
    }
}

drawRect(rect1);
drawRect(rect2, -1);
const filteredList = coordinates.filter((coord) => coord.some((v) => v > 0));
let max = filteredList[filteredList.length - 1].findLastIndex(v => v === 1);
let min = filteredList[0].findIndex(v => v === 1);

const size = filteredList.length * (max - min+1);

console.log(size);
