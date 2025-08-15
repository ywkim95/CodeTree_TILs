const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b, c, d] = input[0].split(' ').map(Number);
// Please Write your code here.

let h = a;
let m = b;

let time = 0;

while(true) {
    if(h === c && m === d) {
        break;
    }

    time++;
    m++;

    if(m === 60) {
        m = 0;
        h++;
    }
}

console.log(time);