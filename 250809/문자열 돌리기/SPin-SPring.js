const str = require('fs').readFileSync(0).toString().trim();
let result = `${str}\n`;
for(let i = 1; i <= str.length; ++i) {
    result += str.slice(-i) + str.slice(0, str.length-i);
    if(i !== str.length) {
        result += '\n';
    }
}

console.log(result);