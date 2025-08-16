const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
function toBinary(n) {
    const arr = [];

    while(true) {
        if(n < 2) {
            arr.push(n);
            break;
        }

        arr.push(n%2);
        n = Math.floor(n/2);
    }

    return arr.reverse().join("");
}

console.log(toBinary(n));