const [nm, ...positions] = require('fs').readFileSync(0).toString().trim().split("\n").map((v) => v.split(" ").map(Number));
const doubleArr = Array(nm[0]).fill(0).map(() => Array(nm[0]).fill(0));
positions.forEach((v) => {
    doubleArr[v[0]-1][v[1]-1] = v[0] * v[1];
});

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));