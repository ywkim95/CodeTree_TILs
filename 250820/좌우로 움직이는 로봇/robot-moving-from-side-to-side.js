const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.
const aArr = [], bArr = [];
for(const ma of movesA) {
    const [tstr, d] = ma.split(" ");
    const t = Number(tstr);
    if(d === 'R') {
        const temp = Array(t).fill(1);
        aArr.push(...temp);
    } else {
        const temp = Array(t).fill(-1);
        aArr.push(...temp);
    }
}
for(const mb of movesB) {
    const [tstr, d] = mb.split(" ");
    const t = Number(tstr);
    if(d === 'R') {
        const temp = Array(t).fill(1);
        bArr.push(...temp);
    } else {
        const temp = Array(t).fill(-1);
        bArr.push(...temp);
    }
}
let i = 0, j = 0;
let aPos = 0, bPos = 0;
let cnt = 0;
while(true) {
    if(i === aArr.length && j === bArr.length) {
        break;
    }
    
    if(i < aArr.length) {
        aPos += aArr[i++];
    }
    if(j < bArr.length) {
        bPos += bArr[j++];
    }
    if(i - 1 === 0 && j - 1 === 0) {
        continue;
    }
    if(aPos === bPos && (aPos - aArr[i-1] !== bPos - bArr[j-1] || i !== j)) {
        cnt++;
    }
}

console.log(cnt);