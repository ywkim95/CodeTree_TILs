const a = require('fs').readFileSync(0).toString().trim().split("\n\n");
const [f, s] = a.map((v) => v.split("\n").map(value => value.split(" ")));

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        f[i][j] = f[i][j] * s[i][j];
    }
}

console.log(f.map((v) => v.join(" ")).join("\n"));