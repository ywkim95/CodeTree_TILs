const input = require('fs').readFileSync(0).toString().trim().toLowerCase();

let result = '';

for(const el of input) {
    if ('a' <= el && el <= 'z') result += el;
    if ('0' <= el && el <= '9') result += el;
}

console.log(result);