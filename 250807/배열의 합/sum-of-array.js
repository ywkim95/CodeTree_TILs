const arr = require("fs").readFileSync(0).toString().trim().split("\n");

let str = "";

arr.forEach((el,i) => {
    
    str += el.split(" ").reduce((acc, cur) => acc + +cur, 0)
    if(i !== arr.length-1) {
        str += "\n";
    }
})

console.log(str);