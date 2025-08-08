const str = require('fs').readFileSync(0).toString().trim();

let newStr = '';

for(let i = 0; i < str.length; i++) {
    if(i === 1 || i === str.length - 2) {
        newStr += 'a';
    } else {
        newStr += str.at(i)
    }
}


console.log(newStr)