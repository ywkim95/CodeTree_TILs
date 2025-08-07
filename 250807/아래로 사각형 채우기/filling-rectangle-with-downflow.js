const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);

const result = Array(n).fill(0).map((v) => Array(n).fill(0));

let num = 1;
for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        result[j][i] = num++;
    }
}
console.log(result.map((v) => v.join(" ")).join("\n"));

