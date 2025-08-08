const [str, ch] = require('fs').readFileSync(0).toString().trim().split("\n");
let cnt = 0;
for(const el of str) {
    if(el === ch) {
        cnt++;
    }
}

console.log(cnt);