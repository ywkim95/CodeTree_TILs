const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const remainArr = [];

while(a > 1) {
    let org = a;
    
    remainArr.push(a % b);
    a = Math.floor(a / b);
}

const arr = Array(remainArr.length).fill(0);

remainArr.forEach((v) => {
    arr[v]++;
})

console.log(arr.reduce((acc, cur) => acc + (cur**2), 0));