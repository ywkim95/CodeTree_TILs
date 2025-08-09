const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function getCountRelatedThree(A,B) {
    let cnt = 0;
    for(let i = A; i <= B; ++i) {
        if(hasNumber(i,3) || hasNumber(i,6) || hasNumber(i,9) || i%3 ===0) {
            cnt++;
        }
    }

    return cnt;
}

function hasNumber(n, std) {
    return n.toString().includes(`${std}`);
}

console.log(getCountRelatedThree(A,B));