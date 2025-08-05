const [n,a,b] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n1, n2] = n.split(" ").map(Number);

console.log(a.includes(b) ? "Yes" : "No");

// for(let i = 0; i < )