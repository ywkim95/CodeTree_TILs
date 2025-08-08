const input = require('fs').readFileSync(0).toString().trim();

const ee = input.includes('ee') ? "Yes" : "No";
const ab = input.includes('ab') ? "Yes" : "No";
console.log(`${ee} ${ab}`);