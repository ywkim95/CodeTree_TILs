const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.

class Forecast {
    constructor(ymd, date, weather) {
        this.ymd = ymd;
        this.date = date;
        this.weather = weather;
    }

    printWeather() {
        console.log(`${this.ymd} ${this.date} ${this.weather}`);
    }

    getYear() {
        return parseInt(this.ymd.split("-")[0]);
    }
}
const weathers = Array(n).fill(null);
for(let i = 0; i < n; ++i) {
    const [ymd, date, weather] = forecasts[i];
    weathers[i] = new Forecast(ymd, date, weather);
}

weathers.sort((a,b) => a.getYear() - b.getYear());

const result = weathers.find((v) => v.weather === "Rain");

result.printWeather();