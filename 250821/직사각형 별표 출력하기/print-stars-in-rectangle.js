const [n,m] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

const result = Array.from({length:n}, () => Array(m).fill('*'));

console.log(result.map((v) => v.join(" ")).join("\n"));