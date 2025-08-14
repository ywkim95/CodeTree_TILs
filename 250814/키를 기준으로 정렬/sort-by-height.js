const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.

class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = Number(height);
        this.weight = Number(weight);
    }

    printInfo() {
        console.log(`${this.name} ${this.height} ${this.weight}`);
    }
}

const students = studentsInput.map((v) => new Person(...v));
students.sort((a,b) => a.height - b.height);
students.forEach((v) => v.printInfo());