let [a, b] = require("fs").readFileSync(0).toString().trim().split("\n");

while(a.includes(b)) {
    const idx = a.indexOf(b);
    a = a.slice(0, idx) + a.slice(idx+b.length);
    
}

console.log(a);