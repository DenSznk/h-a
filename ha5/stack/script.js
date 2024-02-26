class Stack {
  stack = [];
  constructor(maxElementsAmount = 10) {
    this.maxElementsAmount = maxElementsAmount;
  }

  push(num) {
    if (this.stack.length < this.maxElementsAmount) {
      this.stack.push(num);
    } else throw new Error("The stack is full!");
  }
  pop() {
    if (this.stack.length !== 0) {
      const lastElement = this.stack.length - 1;
      this.stack = this.stack.slice(0, lastElement);
    } else {
      throw new Error("The stack is already empty");
    }
  }
  peek() {
    if (this.stack.length !== 0) {
      const lastElement = this.stack.length - 1;
      return this.stack[lastElement];
    } else return null;
  }
  toArray() {
    return this.stack
  }
}

const test = new Stack(5);
// test.push(5)
// test.push(5)
// test.push(5)
// test.push(5)
// test.push(5)
// test.pop()
// test.pop()
// test.pop()
// test.pop()
// test.pop()
// test.pop()
console.log(test.stack);
