const [n,a,b] = require('fs').readFileSync(0).toString().trim().split("\n");
const [n1, n2] = n.split(" ").map(Number);
const aArr = a.split(" ").map(Number);
const bArr = b.split(" ").map(Number);


function func() {
    const find = aArr.findIndex((v) => v === bArr[0]);
    if(find === -1) {
        return "No";
    }

    let match = 0;
    let start = find;
    let idx = 0;

    while(match !== n2) {
        if(aArr[start+idx] === bArr[idx]) {
            idx++;
            match++;
        } else {
            idx = 0;
            match = 0;
            const temp = aArr.indexOf(bArr[0], start + 1);
            if(temp === -1) {
                break;
            }
            start = temp;
        }

        if(start >= a.length) {
            break;
        }
    }

    return match === n2 ? "Yes" : "No";
}

console.log(func());