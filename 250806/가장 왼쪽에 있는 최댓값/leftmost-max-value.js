const [n, ar] = require('fs').readFileSync(0).toString().trim().split("\n");
const arr = ar.split(" ").map(Number);

// 그냥 편하게 Math.max를 통해서 값을 가져온다음 indexOf로 인덱스를 가져온다.
// 그다음 slice를 통해서 배열을 인덱스전까지 잘라낸다.
// 잘라낸 배열에서 동일하게 Math.max를 통해서 값을 가져온다음 indexOf로 인덱스를 가져온다.
// ... 반복 
// 인덱스가 0이라면 종료
let index = Number(n);
const result = [];

while(index !== 0) {
    const a = arr.slice(0, index);
    const max = Math.max(...a);
    index = a.indexOf(max);
    result.push(index+1);
}

console.log(result.join(" "))
