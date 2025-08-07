const [n,m] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

const doubleArr = Array(n).fill(0).map(() => Array(m).fill(0));
let num = 0;
for(let i = 0; i < m;i++) {
    if(i % 2 === 0) {
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