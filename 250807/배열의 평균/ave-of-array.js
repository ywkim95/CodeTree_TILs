const fs = require('fs');
const ar = fs.readFileSync(0).toString().trim().split("\n");

const doubleArr = ar.map((v) => v.split(" ").map(Number));

const row = doubleArr
    .map((arr) => arr.reduce((acc, cur) => acc + (+cur),0) / 4)
    .reduce((acc, cur) => `${acc} ${cur.toFixed(1)}`,"")
    .trim();
const arr = [];
for(let i = 0; i < doubleArr[0].length; i++) {
    const sum = doubleArr[0][i] + doubleArr[1][i];
    arr.push(sum/2);
}

const col = arr.reduce((acc, cur) => `${acc} ${cur.toFixed(1)}`,"").trim();

const avg = doubleArr.flatMap(x=>x).reduce((acc, cur) => acc + cur, 0)/8;

console.log(`${row}\n${col}\n${avg.toFixed(1)}`);
