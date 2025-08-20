const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
    const [d, t] = input[line++].split(' ');
    movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
    const [d, t] = input[line++].split(' ');
    movesB.push([d, Number(t)]);
}

// Please Write your code here.
const totalTime = movesA.reduce((acc, cur) => {
    return acc + cur[1];
},0);
let time = 0;
const aArr = [], bArr = [];
for(let i = 0; i < movesA.length; i++) {
    const [d, t] = movesA[i];
    if(d === 'R') {
        const temp = Array(t).fill(1)
        aArr.push(...temp);
    } else {
        const temp = Array(t).fill(-1);
        aArr.push(...temp);
    }   
}

for(let i = 0; i < movesB.length; i++) {
    const [d, t] = movesB[i];
    if(d === 'R') {
        const temp = Array(t).fill(1)
        bArr.push(...temp);
    } else {
        const temp = Array(t).fill(-1);
        bArr.push(...temp);
    }   
}
let a=0,b=0;
let idx = -1;
for(let i = 0; i < aArr.length; i++) {
    a += aArr[i];
    b += bArr[i];
    if(a === b) {
        idx = i+1;
        break;
    }
}

console.log(idx);