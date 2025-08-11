const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.
function sumQuery(a,b) {
    let sum = 0;
    for(let i = a-1; i <b; i++) {
        sum += A[i];
    }

    return sum;
}

const result = queries.map((v) => sumQuery(...v)).join("\n");

console.log(result);