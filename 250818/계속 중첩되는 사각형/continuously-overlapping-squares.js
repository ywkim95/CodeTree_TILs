const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rectangles = [];
for (let i = 1; i <= n; i++) {
    const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
    rectangles.push([x1, y1, x2, y2]);
}
// Please Write your code here.
const arr = Array.from({length: 201}, () => Array(201).fill(0));
function drawRect(rect, value = 1) {
    const [x1, y1, x2, y2] = rect;
    for(let i = x1; i < x2; ++i) {
        for(let j = y1; j < y2; ++j) {
            arr[i+100][j+100] = value;
        }
    }
}

rectangles.forEach((v, i) => {
    if(i%2 ===0) {
        drawRect(v, -1);
    } else {
        drawRect(v);
    }
});

const size = arr.reduce((acc, cur) => acc + cur.filter(v => v > 0).length, 0);

console.log(size);