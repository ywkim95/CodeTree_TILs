const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
// Please write your code here.
const result = Array(N).fill(0).map((_,i) => Array(N).fill(1));
let idx = 1;
for(let i = 0; i < result.length; ++i) {
    for(let j = 0; j < result[i].length; ++j) {
        if(idx === 10) idx = 1;
        result[i][j] = idx++;
    }
}

console.log(result.map((v) => v.join(" ")).join("\n"));