let [n, str] = require("fs").readFileSync(0).toString().trim().split("\n");

str = str.replaceAll(" ", "");

let arr = [];
for(let i = 0; i < str.length/5; i++) {
    const a = str.slice(i*5, (i+1)*5);
    arr.push(a);
}

console.log(arr.join("\n"));