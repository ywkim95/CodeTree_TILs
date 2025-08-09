const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
let n1 = n, m1 = m, nIdx = 2, mIdx = 2;
while(n1 !== m1) {
    if(n1 > m1) m1 = m * mIdx++;
    else if(n1 < m1) n1 = n * nIdx++;
}

console.log(n1);