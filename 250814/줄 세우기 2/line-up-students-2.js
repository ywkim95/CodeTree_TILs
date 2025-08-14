const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.

class Student {
    constructor(id, height, weight) {
        this.id = id;
        this.height = height;
        this.weight = weight;
    }

    print() {
        console.log(`${this.height} ${this.weight} ${this.id}`);
    }
}

const cmp = (a,b) => {
    if(a.height === b.height) {
        return b.weight - a.weight;
    }

    return a.height - b.height;
}

const students = studentInputs.map((v,i) => new Student(i+1,...v));

students.sort(cmp);

students.forEach((v) => v.print());