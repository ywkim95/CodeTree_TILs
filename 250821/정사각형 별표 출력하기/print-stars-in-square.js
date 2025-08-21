const input = require('fs').readFileSync(0).toString().trim();

const n = Number(input);

const result = Array(n).fill('****');

console.log(result.join("\n"));