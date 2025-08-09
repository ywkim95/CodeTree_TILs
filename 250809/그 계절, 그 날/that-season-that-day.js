const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.

function isLeapYear(year) {
    if(year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    if(year % 4 === 0 && year % 100 === 0) {
        return false;
    }
    if(year % 4 === 0) {
        return true;
    }

    return false;
}

function isRightDay(day, monthPerDay) {
    return day <= monthPerDay;
}

function getSeason(month) {
    switch(month) {
        case 1:
        case 2:
        case 12:
            return 'Winter';
        case 3:
        case 4:
        case 5:
            return 'Spring';
        case 6:
        case 7:
        case 8:
            return 'Summer';
        case 9:
        case 10:
        case 11:
            return 'Fall';
    }
}

function isRightYmd(year, month, day) {
    switch(month) {
        case 2: {
            const leapYear = isLeapYear(year);
            if(isRightDay(day, leapYear ? 29 : 28)){
                return getSeason(month);
            }
            return '-1';
        }
        case 4:
        case 6:
        case 9: 
        case 11: {
            if(isRightDay(day, 30)) {
                return getSeason(month);
            }
            return '-1';
        }
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
            if(isRightDay(day, 31)){
                return getSeason(month);
            }
            return '-1';
        }        
        default:
            return '-1';
    }
}

console.log(isRightYmd(year, month, day))