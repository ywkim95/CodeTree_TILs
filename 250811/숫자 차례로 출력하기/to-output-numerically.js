const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

// Please Write your code here.

function rec(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        str += `${i} `;
    }
    console.log(str.trim())
}

function reRec(n) {
    let str = '';
    for (let i = n; i >= 1; i--) {
        str += `${i} `;
    }
    console.log(str.trim())
}

rec(n);
reRec(n);