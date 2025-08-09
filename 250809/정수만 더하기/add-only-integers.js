const input = require('fs').readFileSync(0).toString().trim().toLowerCase();

let result = 0;

for(const el of input) {
    if ('0' <= el && el <= '9') result += +el;
}

console.log(result);