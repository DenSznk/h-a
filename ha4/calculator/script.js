class Calculator {
  constructor(x, y) {
    if (this.checkData(x) && this.checkData(y)) {
      this.setX(x);
      this.setY(y);
    } else throw new Error("Value must be a number");
  }
  setX(number) {
    this.x = number;
  }
  setY(number) {
    this.y = number;
  }
  checkData(number) {
    if (typeof number === "number" && !isNaN(number) && isFinite(number)) {
      return true;
    } else false;
  }
  logSum() {
    return this.x + this.y;
  }
}

const test = new Calculator("13", 2);

console.log(test.logSum());
