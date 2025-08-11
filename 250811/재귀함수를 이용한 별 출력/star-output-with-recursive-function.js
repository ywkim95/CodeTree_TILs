const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);
// Please Write your code here.
function rec(n) {
    if(n === 0){
        return;
    }

    rec(n-1);
    console.log('*'.repeat(n));
}
rec(n);