const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let even = 0, odd = 0;

input.forEach((v, i) => {
    if(i % 2 === 0) {
        odd += v;
    } else {
        even += v;
    }
})

if(odd > even) {
    console.log(odd-even);
} else {
    console.log(even-odd);
}