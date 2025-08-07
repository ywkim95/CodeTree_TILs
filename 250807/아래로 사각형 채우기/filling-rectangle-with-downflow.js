const input = require('fs').readFileSync(0).toString().trim().split("\n");
const doubleArr = input.map((v) => v.split(" ").map(Number));

const result = Array(doubleArr.length).fill(0).map((v) => Array(doubleArr[0].length).fill(0));

let num = 1;
for(let i = 0; i < doubleArr.length; i++) {
    for(let j = 0; j < doubleArr[0].length; j++) {
        result[j][i] = num++;
    }
}

console.log(result.map((v) => v.join(" ")).join("\n"));

