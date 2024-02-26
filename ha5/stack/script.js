class Stack {
  stack = [];
  constructor(maxElementsAmount = 10) {
    if (typeof maxElementsAmount === "number" && !isNaN(maxElementsAmount) && isFinite(maxElementsAmount)) {
        this.maxElementsAmount = maxElementsAmount;
    } else throw new Error("Not correct value")
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
  isEmpty () {
    return this.stack.length === 0
  }
  fromIterable(iterable) {
    const newStack = new Stack()

    return newStack
  }

}

const test = new Stack(12);
console.log(test.isEmpty())
console.log(test.maxElementsAmount);
