const [nq, na, ...qa] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n,q] = nq.split(" ").map(Number);
const nArr = na.split(" ").map(Number);
const qArr = qa.map((v) => v.split(" ").map(Number));


function func_a(a) {
    return nArr[a - 1];
};
function func_b(b) {
    return nArr.findIndex((n) => n === b) + 1;
};
function func_c(s, e) {
    return nArr.slice(s-1, e).join(" ");
};

const result = qArr.map((v) => {
    switch(v[0]) {
        case 1:
            return func_a(v[1]);
        case 2:
            return func_b(v[1]);
        case 3:
            return func_c(v[1], v[2]);
    }
    return -1;
}).filter((v) => v !== -1).join("\n");

console.log(result);