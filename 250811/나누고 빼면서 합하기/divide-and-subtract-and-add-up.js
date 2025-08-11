const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
// Please Write your code here.

function favSum(arr, m) {
    let sum = arr[m-1];
    while(m !== 1) {
        if(m % 2 === 0){
            m /= 2;
        } else {
            m -= 1;            
        }
        sum += arr[m-1];
    }

    return sum;
}

console.log(favSum(A,m));