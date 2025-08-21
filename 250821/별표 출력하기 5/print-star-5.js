const input = require('fs').readFileSync(0).toString().trim();
const n = Number(input);
let str = '';
for(let i = n; i > 0; i--) {
    const temp = Array(i).fill('*'.repeat(i)).join(" ");
    str += temp;

    if(i !== 1) {
        str += '\n';
    }
}

console.log(str);