const arr = require('fs').readFileSync(0).toString().trim().split("\n");
let str = [];
for(const el of arr) {
    if(el === 'END') break;
    let re = '';
    for(let i = el.length-1; i >= 0; --i) {
        re += el.at(i);
    }
    str.push(re);
}

console.log(str.join("\n"));