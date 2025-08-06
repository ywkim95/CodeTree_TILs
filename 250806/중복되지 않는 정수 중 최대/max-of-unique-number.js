const [n, arr] = require('fs').readFileSync(0).toString().trim().split("\n");
const num = Number(n);
const numArr = arr.split(" ").map(Number);
let maxValue = Number.MIN_SAFE_INTEGER;

// 그러면 내가 한게 다른 방식이니까 지금 생각을 해보면 for문이 아니라 find로 값을 찾고 갯수를 계속 비교하면서 진행을 해야하는걸까? 
// 그러면 map으로 피벗을 진행한다음 갯수를 체크하면 좋을듯 ㅎ

const map = new Map();

numArr.forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
});

const convert = Array.from(map, ([name, value]) => ({name, value}));
const result = convert.filter((v) => v.value < 2).sort((a,b) => b.name - a.name);
console.log(result.length !== 0 ? result[0].name : -1);