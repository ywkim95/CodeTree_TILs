const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
class Student {
    constructor(id) {
        this.id = id;
        this.penalty = 0;
    }

    getId() {
        return this.id;
    }

    Penalize() {
        this.penalty++;
    }
}

const students = Array.from({length:n}, (_,i) => new Student(i+1));
let penalizedPerson = -1;
for(let i = 0; i < penalizedPersons.length; i++) {
    const who = penalizedPersons[i];
    const student = students.find((student) => student.getId() === who);
    if(!!student) {
        student.Penalize();
        if(student.penalty >= k) {
            penalizedPerson = student.getId();
            break;
        }
    }
}

console.log(penalizedPerson);