const [n, m] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

const arr = Array(n).fill(0).map((_, i) => {
    return Array(m).fill(0).map((__, j) => (i*(n-1))+j+1).join(" ");
}).join("\n");


console.log(arr);