const input = require('fs').readFileSync(0).toString().trim();

const n = Number(input);

const result = Array(n).fill('*'.repeat(n)).join("\n");

console.log(`${result}\n\n${result}`);