const n = 5;

const doubleArr = Array(n).fill(0).map(() => Array(n).fill(1));

for(let i = 1; i < n; i++) {
    for(let j = 1; j < n; j++) {
        doubleArr[i][j] = doubleArr[i-1][j] + doubleArr[i][j-1];
    }
}

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));