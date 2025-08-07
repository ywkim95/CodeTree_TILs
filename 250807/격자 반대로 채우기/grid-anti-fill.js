const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);

const doubleArr = Array(n).fill(0).map(() => Array(n).fill(0));
let num = 1;

for(let i = n-1; i >= 0; i--) {
    if(i%2 === 0) {
        for(let j = 0; j < n; j++) {
            doubleArr[j][i] = num++;
        }
    } else {
        for(let j = n-1; j >= 0; j--) {
            doubleArr[j][i] = num++;
        }
    }
}

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));