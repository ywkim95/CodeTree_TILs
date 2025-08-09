const input = require('fs').readFileSync(0).toString().trim().toUpperCase();
let result = '';

for(const el of input) {
    if ('A' <= el && el <= 'Z') result += el;
}

console.log(result);