function createUsers(name, age) {
  const result = [
    defProperties(name, age),
    objCreate(name, age)
  ];
  return result;
}

function defProperties(name, age) {
  const obj = {};
  Object.defineProperties(obj, {
    name: {
      value: name,
      writable: true,
      enumerable: true,
    },
    age: {
      value: age,
      writable: true,
      enumerable: true,
    },
  });
  return obj;
}

function objCreate(name, age) {
  const obj = {
    name,
    age,
  };

  const user = Object.create(obj);
  user.name = name;
  user.age = age;
  return user;
}

console.log(createUsers("John", 35));
