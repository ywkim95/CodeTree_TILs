const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const rawStudentData = input.slice(1, n + 1);

// Please Write your code here.
class Student {
    constructor(name, kor, eng, math) {
        this.name = name;
        this.kor = +kor;
        this.eng = +eng;
        this.math = +math;
    }

    printStudent() {
        console.log(`${this.name} ${this.kor} ${this.eng} ${this.math}`)
    }
}

const cmp = (a,b) => {
    if(a.kor === b.kor && a.eng === b.eng) {
        return b.math - a.math;
    }
    if(a.kor === b.kor) {
        return b.eng - a.eng;
    }

    return b.kor - a.kor;
};

const students = rawStudentData.map((v) => new Student(...v.split(" ")));
students.sort(cmp);

students.forEach((v) => v.printStudent());