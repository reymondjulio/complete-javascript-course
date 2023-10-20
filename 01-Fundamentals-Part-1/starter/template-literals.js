// Template Literals

const firstName = "Reymond";
const job = "Programmer";
const birthYear = 1997;
const year = 2023;

const reymond = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(reymond);

const reymondNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(reymondNew);

console.log(`Just a regular string.....`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String with
multiple
lines`);
