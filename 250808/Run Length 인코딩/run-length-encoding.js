const input = require('fs').readFileSync(0).toString().trim();
let str = "";
let count;
for(let i = 0; i < input.length; i++) {
    count = 0;
    while(i+1 < input.length && input.at(i) === input.at(i+1)) {
        count++;
        i++;
    }

    str += `${input.at(i)}${count+1}`;
}

console.log(`${str.length}\n${str}`);