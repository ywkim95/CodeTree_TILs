const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
// Please Write your code here.

// 그러면 모든 수를 곱해야하나?
// 유클리드호제법으로 구해보자

function gcd(a, b) {
    if(a % b === 0) {
        return b;
    }

    return gcd(b, a % b);
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function func(arr, idx = 1) {
    if(idx === arr.length) {
        return arr[idx-1];
    }
    const lcm_v = lcm(arr[idx-1], arr[idx]);

    arr[idx] = lcm_v;
    return func(arr, idx+1);
}

console.log(func(numbers));