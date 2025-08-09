const [a,b] = require("fs").readFileSync(0).toString().trim().split(" ");

const aChar = a.charCodeAt(0);
const bChar = b.charCodeAt(0);

console.log(`${aChar+bChar} ${Math.abs(aChar-bChar)}`);
