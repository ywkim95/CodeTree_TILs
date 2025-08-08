const [sq, ...arr] = require('fs').readFileSync(0).toString().trim().split("\n").map((v) => v.split(" "));

let [str, Q] = sq;
let S = str.split("").filter((v) => v);
const result = Array(+Q).fill('');
for(let i = 0; i < +Q; i++) {
    if(arr[i][0] === '1') {
        const a = S[arr[i][1]-1];
        const b = S[arr[i][2]-1];
        let newStr = '';
        for(let j = 0; j < S.length; j++) {
            if(j === arr[i][1]-1) {
                newStr += b;
            } else if(j === arr[i][2]-1) {
                newStr += a;
            } else {
                newStr += S.at(j);
            }
        }
        S = newStr.split("").filter(v=>v);
    } else {
        const aa = S.join("").replaceAll(arr[i][1], arr[i][2]).split("").filter(v=>v);
        S = aa;
    }

    result[i] = S;
}

console.log(result.map((v) => v.join("")).join("\n"));