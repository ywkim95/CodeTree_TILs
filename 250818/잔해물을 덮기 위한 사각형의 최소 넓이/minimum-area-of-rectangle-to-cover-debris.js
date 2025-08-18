const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const rect1 = input[0].split(' ').map(Number);
const rect2 = input[1].split(' ').map(Number);


// Please Write your code here.
const coordinates = new Map();

function drawRect(rect, value = 1) {
    const [x1, y1, x2, y2] = rect;
    for(let i = x1; i < x2; i++) {
        for(let j = y1; j < y2; j++) {
            const key = `${i} ${j}`;
            const cur = coordinates.get(key) || 0;
            coordinates.set(key, cur + value);
        }
    }
}

drawRect(rect1);
drawRect(rect2, -1);
let minX = Number.MAX_SAFE_INTEGER, minY = Number.MAX_SAFE_INTEGER;
let maxX = Number.MIN_SAFE_INTEGER, maxY = Number.MIN_SAFE_INTEGER;
let flag = false;
for(const [key, value] of coordinates) {
    if(value > 0) {
        flag = true;
        const [x,y] = key.split(" ").map(Number);
        if(x > maxX) maxX = x;
        if(x < minX) minX = x;
        if(y > maxY) maxY = y;
        if(y < minY) minY = y;
    }
}


if(!flag) {
    console.log(0);
} else {
    const size = (maxX - minX + 1) * (maxY - minY + 1);
    console.log(size);
}

