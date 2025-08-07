const ar = require('fs').readFileSync(0).toString().trim().split("\n");
const doubleArr = ar.map(v => v.split(" ").map(Number));

let result = 0;
for(let i = doubleArr.length-1; i >= 0; --i) {
    for(let j = 0; j <= i; j++) {
        result += doubleArr[i][j];
    }
}

console.log(result);