const input = require('fs').readFileSync(0).toString().trim().split(" ").reduce((acc,cur) => acc + +cur, 0).toString();

let cnt = 0;

for(const el of input) {
    if(+el === 1) {
        cnt++;
    }
}

console.log(cnt);