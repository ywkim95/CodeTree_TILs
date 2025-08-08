const str = require('fs').readFileSync(0).toString().trim();

let newStr = '';

const fir = str.at(0);
const sec = str.at(1);

for(let i = 0; i < str.length; i++) {
    const char = str.at(i)
    if(fir === char){
        newStr += sec;
    } else if(sec === char) {
        newStr += fir;
    } else {
        newStr += char;
    }
}

console.log(newStr);