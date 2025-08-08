const input = require('fs').readFileSync(0).toString().trim();

const arr = ['apple','banana','grape','blueberry','orange'];
const result = [];

for(const el of arr) {
    if(el.at(2) === input || el.at(3) === input) {
        result.push(el);
    }
}

const str = result.map((v) => `${v}\n`);

console.log(`${str.join("")}${result.length}`);