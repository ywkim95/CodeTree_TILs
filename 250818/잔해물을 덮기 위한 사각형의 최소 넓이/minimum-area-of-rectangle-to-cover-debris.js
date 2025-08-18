const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);


// Please Write your code here.
const coordinates = Array.from({length:2001}, () => Array(2001).fill(0));

function drawRect(rect, value = 1) {
    const [x1, y1, x2, y2] = rect;
    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            coordinates[i+1000][j+1000] = value;
        }
    }
}

drawRect(rect1);
drawRect(rect2, -1);
let minX = Number.MAX_SAFE_INTEGER, minY = Number.MAX_SAFE_INTEGER;
let maxX = Number.MIN_SAFE_INTEGER, maxY = Number.MIN_SAFE_INTEGER;
const filteredList = coordinates.filter((coord) => coord.some((v) => v > 0));

if(filteredList.length === 0) {
    console.log(0);
} else {
    for(let i = 0; i < filteredList.length; ++i) {
        for(let j = 0; j < filteredList[i].length; ++j) {
            if(filteredList[i][j] > 0) {
                if(i-1000 > maxX) maxX = i-1000;
                if(i-1000 < minX) minX = i-1000;
                if(j-1000 > maxY) maxY = j-1000;
                if(j-1000 < minY) minY = j-1000;
            }
        }
    }
    const size = (maxX - minX + 1) * (maxY - minY + 1);
    console.log(size);
}

