const input = require('fs').readFileSync(0).toString().trim();
const char = input === 'a' ? input.charCodeAt(0) + 25 : input.charCodeAt(0) - 1;
const result = String.fromCharCode(char);

console.log(result);