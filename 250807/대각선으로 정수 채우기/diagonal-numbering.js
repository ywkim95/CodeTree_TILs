const [n,m] = require('fs').readFileSync(0).toString().trim().split(" ").map(Number);

const doubleArr = Array(n).fill(0).map(() => Array(m).fill(0));

// 3*3 -> 00 01 10 02 11 20 12 21 22
// 4*4 -> 00 01 10 02 11 20 03 12 21 30 13 22 31 23 32 33
// 3*5 -> 00 01 10 02 11 20 03 12 21 40 31 22 14 23 34
let num = 1;
let i=0, j=0;
let index = 0;
while(num <= n*m) {
    if(i >= n || j < 0) {
        index++;
        i = 0;
        j = index;
    }
    if(j>=m) {
        j--;
        i++;
        continue;
    }
    doubleArr[i++][j--] = num++;
}

console.log(doubleArr.map((v) => v.join(" ")).join("\n"));