const obj = {
  name: "mahera",
  type: "student",
  gender: "male",
  age: 20,
  city: "balasinor",
};

for (var key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
