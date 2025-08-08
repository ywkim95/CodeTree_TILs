const [str, fin] = require('fs').readFileSync(0).toString().trim().split("\n");
let cnt = 0;
for(let i = 0; i < str.length-1; i++) {
    const s = str.slice(i,i+2);
    if(s === fin) cnt++;
}

console.log(cnt);