const age = 15;

if (age >= 18) {
  console.log(`Reymond can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Reymond is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1997;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
