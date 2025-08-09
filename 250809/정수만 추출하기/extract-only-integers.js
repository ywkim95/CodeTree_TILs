const [a,b] = require('fs').readFileSync(0).toString().trim().split(" ");
let astr = '', bstr = '';
for(let i = 0; i < a.length; i++) {
    if(isNaN(a.at(i))) {
        break;
    }
    astr += a.at(i);
}

for(let i = 0; i < b.length; i++) {
    if(isNaN(b.at(i))) {
        break;
    }
    bstr += b.at(i);
}

console.log(+astr + +bstr)