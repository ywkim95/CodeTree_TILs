const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
// 오름차순 정렬을 한 뒤 첫번째와 마지막을 붙이는게 가장 작은 수가 나온다.

nums.sort((a,b) => a - b);
const arr = Array(n).fill(0);
for(let i = 0; i < n; i++) {
    arr[i] = nums[i] + nums[2*n-1-i];
}
console.log(Math.max(...arr));
