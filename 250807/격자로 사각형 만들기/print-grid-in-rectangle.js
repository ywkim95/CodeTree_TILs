const n = Number(require('fs').readFileSync(0).toString().trim());

const doubleArr = Array(n).fill(0).map(()=> Array(n).fill(1));

for(let i = 1; i < n; i++) {
    for(let j = 1; j < n; j++) {
        doubleArr[i][j] = doubleArr[i-1][j] + doubleArr[i][j-1] + doubleArr[i-1][j-1];
    }
}

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));