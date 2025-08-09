const input = require('fs').readFileSync(0).toString().trim();

let result = '';

for(const el of input) {
    if ('a' <= el && el <= 'z') result += el.toUpperCase();
    if ('A' <= el && el <= 'Z') result += el.toLowerCase();
}

console.log(result);