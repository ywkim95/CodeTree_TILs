const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.
const arr = [];

for(const word of words) {
    if(word.startsWith(t)) {
        arr.push(word);
    }
}
arr.sort();
console.log(arr[k-1]);