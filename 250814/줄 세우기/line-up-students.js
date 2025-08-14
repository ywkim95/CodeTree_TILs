const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const studentsData = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    studentsData.push([height, weight, i]);
}

// Please Write your code here.

class Student {
    constructor(height, weight, id) {
        this.id = +id;
        this.height = +height;
        this.weight = +weight;
    }

    print() {
        console.log(`${this.height} ${this.weight} ${this.id}`);
    }
}

const cmp = (a,b) => {
    if(a.height === b.height && a.weight === b.weight) {
        return a.id - b.id;
    }
    if(a.height === b.height) {
        return b.weight - a.weight;
    }

    return b.height - a.height;
}

const students = studentsData.map((v) => new Student(...v));

students.sort(cmp);

students.forEach((v) => v.print());