const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.
const totalTime = aData.reduce((acc, cur) => acc + cur[1], 0);
const aArr = [], bArr = [];
for(let i = 0; i < aData.length; i++) {
    const [v, t] = aData[i];
    const temp = Array(t).fill(v);
    aArr.push(...temp);
}
for(let i = 0; i < bData.length; i++) {
    const [v, t] = bData[i];
    const temp = Array(t).fill(v);
    bArr.push(...temp);
}
let a = 0, b = 0;
let aBigger;
let cnt = 0;
for(let i = 0; i < totalTime; i++) {
    a += aArr[i];
    b += bArr[i];
    if(i === 0) {
        aBigger = a > b ? true : false;
        continue;
    }

    if(aBigger &&  a < b) {
        aBigger = false;
        cnt++;
    } else if(!aBigger && b < a) {
        aBigger = true;
        cnt++;
    }
}

console.log(cnt);