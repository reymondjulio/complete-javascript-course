// Math Operators

const yearNow = 2023;
const ageReymond = yearNow - 1997;
const ageJulio = yearNow - 2002;

console.log(ageReymond - ageJulio);
console.log(ageReymond * 2, ageJulio / 10, 2 ** 3);

const firstName = "Reymond";
const lastname = "Julio";
console.log(firstName + " " + lastname);

// Assigments Operators

let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison Operators
console.log(ageReymond > ageJulio);
console.log(ageJulio >= 18);

const isFullAge = ageJulio >= 18;
console.log(yearNow - 1997 > yearNow - 2002);
