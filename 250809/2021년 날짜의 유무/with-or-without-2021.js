const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [m, d] = input[0].split(" ").map(Number);

// Please Write your code here.

function isRightDate(m, d) {
    switch(m) {
        case 2:
            return isRightDay(d, 28);
        case 4:
        case 6:
        case 9:
        case 11:
            return isRightDay(d, 30);
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return isRightDay(d, 31);
        default:
            return "No";
    }
}

function isRightDay(day, monthPerDay) {
    return d <= monthPerDay ? "Yes" : "No";
}

function main() {
    console.log(isRightDate(m, d));
}

main();