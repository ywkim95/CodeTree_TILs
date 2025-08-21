const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);
let str = '';
for(let i = 1; i <= n; i++) {
    const temp = Array(i*2-1).fill('*').join("");
    str += temp;
    if(i !== n) {
        str += '\n';
    }
}

console.log(str);