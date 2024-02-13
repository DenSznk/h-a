const myObj = {
  from: 1,
  to: 4,

  [Symbol.iterator]: function () {
    if (typeof this.from !== "number" || typeof this.to !== "number") {
      throw new Error("You have to use only numbers");
    }
    if (this.from > this.to) {
      throw new Error('"from" parameter must be <= "to');
    }

    let current = this.from;

    const next = () => {
      if (current <= this.to) {
        return { value: current++, done: false };
      } else {
        return { done: true };
      }
    };
    return { next };
  },
};

for (const i of myObj) {
  console.log(i);
}
