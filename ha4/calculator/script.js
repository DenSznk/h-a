class Calculator {
  constructor(x, y) {
    if (Calculator.isValidNumber(x) && Calculator.isValidNumber(y)) {
      this.#setX(x);
      this.#setY(y);
    } else throw new Error("Value must be a number");
  }
  //I want to make these methods as a class methods
  //so that they are only available for calling inside the class
  //to maintain proper operation
  #setX(number) {
    this.x = number;
  }
  #setY(number) {
    this.y = number;
  }
  static isValidNumber(number) {
    if (typeof number === "number" && !isNaN(number) && isFinite(number)) {
      return true;
    } else false;
  }
  logSum = () => {
    return this.x + this.y;
  };
  logMul = () => {
    return this.x * this.y;
  };
  logSub = () => {
    return this.x - this.y;
  };
  logDiv = () => {
    if (this.y !== 0) {
      return this.x / this.y;
    } else {
      throw new Error("Zero division error");
    }
  };
}

const calculator = new Calculator(12, 4);
console.log(calculator.logMul());

const logSumRef = calculator.logSum;
console.log(logSumRef()); // still works
