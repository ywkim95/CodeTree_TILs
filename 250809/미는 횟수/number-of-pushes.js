let [a,b] = require('fs').readFileSync(0).toString().trim().split("\n");

let cnt = 0;
while(a !== b) {
    if(cnt >= a.length) {
        break;
    }
    a = a.slice(-1) + a.slice(0,-1);
    cnt++;
}

console.log(cnt < a.length ? cnt : -1);