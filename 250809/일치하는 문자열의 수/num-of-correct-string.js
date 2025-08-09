const [nstr, ...arr] = require('fs').readFileSync(0).toString().trim().split('\n');
const [n, str] = nstr.split(" ");

let matched = 0;

for(const el of arr) {
    if(str === el) {
        matched++;
    }
}

console.log(matched);