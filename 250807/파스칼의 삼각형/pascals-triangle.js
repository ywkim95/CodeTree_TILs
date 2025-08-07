const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);

const doubleArr = Array(n).fill(0).map((_, i) => Array(i+1).fill(1));

for(let i = 1; i < n; i++) {
    for(let j = 1; j < i; j++) {
        doubleArr[i][j] = doubleArr[i-1][j-1] + doubleArr[i-1][j];
    }
}

console.log(doubleArr.map((v) => v.join(" ").trim()).join("\n"));