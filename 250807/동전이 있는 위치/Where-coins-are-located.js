const [nm, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n,m] = nm.split(" ").map(Number);

const doubleArr = Array(n).fill(0).map(() => Array(n).fill(0));

const positions = arr.map((v) => v.split(" ").map(Number));
positions.forEach((v) => {
    doubleArr[v[0]-1][v[1]-1] = 1;
})

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));
