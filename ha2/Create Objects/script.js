function createUsers(name, age) {
  const result = [
    fromDefineProperties(name, age),
    fromObjCreate(name, age),
    fromMyEntries(name, age),
    fromProto(name, age)
  ];
  return result;
}

function fromDefineProperties(name, age) {
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

function fromObjCreate(name, age) {
  const obj = {
    name,
    age,
  };

  const user = Object.create(obj);
  user.name = name;
  user.age = age;
  return user;
}

function fromMyEntries(name, age) {
  const entries = [
    ["name", name],
    ["age", age],
  ];
  return Object.fromEntries(entries);
}

function fromProto(name, age) {
  const user = { name, age };
  const newUser = { __proto__: user };
  const result = {};
  for (let property in newUser) {
    result[property] = newUser[property];
  }
  return result;
}
// console.log(fromProto("John", 35));

console.log(createUsers("John", 35));
