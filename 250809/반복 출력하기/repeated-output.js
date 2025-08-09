const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.

function strFunc() {
    return '12345^&*()_';
}

let str = '';

for(let i = 0; i < n; i++) {
    str += strFunc();
    if(i !== n-1) {
        str += '\n';
    }
}

console.log(str);