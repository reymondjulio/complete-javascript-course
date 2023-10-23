//  Arrow Functions

const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in  ${retirement} years`;
};

console.log(yearsUntilRetirement(1997, "Reymond"));
console.log(yearsUntilRetirement(1990, "Jason"));
