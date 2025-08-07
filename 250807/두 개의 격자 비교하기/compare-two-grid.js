const [nm, ...arr] = require("fs").readFileSync(0).toString().trim().split("\n");
const [n,m] = nm.split(" ").map(Number);
const first = arr.slice(0, n).map((v) => v.split(" ").map(Number));
const second = arr.slice(n).map((v) => v.split(" ").map(Number));

for(let i = 0; i < n; i++) {
    for(let j = 0; j < m; j++) {
        if(first[i][j] === second[i][j]) {
            first[i][j] = 0;
        } else {
            first[i][j] = 1;
        }
    }
}

console.log(first.map((v) => v.join(" ")).join("\n"));