const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const remainArr = Array(10).fill(0);

while(a >= 2) {
    remainArr[a%b]++;
    a = Math.floor(a / b);
}


console.log(remainArr.reduce((acc, cur) => acc + (cur**2), 0));