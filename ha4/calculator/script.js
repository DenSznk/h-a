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
  logMul() {
    return this.x * this.y;
  }
  logSub() {
    return this.x - this.y;
  }
  logDiv() {
    if (this.y !== 0) {
        return this.x / this.y;
    } else {
        throw new Error("Zero division error")
    }

  }

}

const test = new Calculator(12, 4);
test.setX('16')
console.log(test.logDiv());// => 4 not Error
