const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rectA = input[0].split(' ').map(Number);
const rectB = input[1].split(' ').map(Number);
const rectM = input[2].split(' ').map(Number);

// Please Write your code here.
const coordinates = Array(2001).fill(0).map(() => Array(2001).fill(0));
function drawRect(rect, value = 1) {
    const [x1,y1,x2,y2] = rect;

    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            coordinates[i+1000][j+1000] = value;
        }
    }
}

drawRect(rectA);
drawRect(rectB);
drawRect(rectM, -1);

const size = coordinates.map((coord) => coord.filter((v) => v > 0).length).reduce((acc, cur) => acc + cur, 0);

console.log(size);