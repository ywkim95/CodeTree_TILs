const [n,a,b] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n1, n2] = n.split(" ").map(Number);

function func() {
    const matched = a.indexOf(b.at(0));
    if(matched === -1) {
        return "No";
    }
    // indexOf 사용 해보기
    let match = 0;
    let start = matched;
    let idx = 0;
    while(match !== n2) {
        if(a.at(start+idx) === b.at(idx)) {
            idx += 2;
            match++;
        } else {
            idx = 0;
            match = 0;
            start += 2;
        }

        if(start >= a.length) {
            break;
        }
    }

    return match === n2 ? "Yes" : "No";
}

console.log(func());