Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callback(element, i, this)) {
      result.push(element);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const test = numbers.myFilter((element) => {
  return element > 5;
});

console.log(test);
