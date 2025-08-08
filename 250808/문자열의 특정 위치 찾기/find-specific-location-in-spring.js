const [str, ch] = require('fs').readFileSync(0).toString().trim().split(" ");
let idx = -1;
for(let i = 0; i < str.length; i++) {
    if(str.at(i) === ch) {
        idx = i;
        break;
    }
}

console.log(idx === -1 ? "No" : idx);