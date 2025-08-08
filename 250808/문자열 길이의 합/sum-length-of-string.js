const [n, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n");
let cnt = 0;

for(const el of arr) {
    if(el.at(0) === 'a') {
        cnt++;
    }
}

console.log(`${arr.join("").length} ${cnt}`);