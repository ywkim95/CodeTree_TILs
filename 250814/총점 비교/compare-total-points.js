const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.
class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = +kor;
        this.eng = +eng;
        this.math = +math;
    }

    print() {
        console.log(`${this.name} ${this.kor} ${this.eng} ${this.math}`);
    }

    getTotal() {
        return this.kor + this.eng + this.math;
    }
}

const cmp = (a,b) => {
    return a.getTotal() - b.getTotal();
}

const students = studentData.map((v) => new Student(...v));
students.sort(cmp);

students.forEach((v) => v.print());