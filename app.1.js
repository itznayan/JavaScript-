const multiply = (value1, value2) => value1 * value2;

const sum = (value1, value2) => {
  return value1 + value2;
};

function divide(value1, value2) {
  return value2 / value1;
}

let a = console.log(sum(10, 20));
let b = console.log(multiply(10, 20));
let c = console.log(divide(10, 20));

let user1 = {
  name: "Jareja",
  surename: "Hu Jav",
  mobileNumber: 4545123245,
  isStudent: true,
  isIntern: false,
};

const listOfKey = (Element) => {
  console.log(`properties: ${user1.name} and type is ${user1[Element]}`);
};

listOfKey("surename");
