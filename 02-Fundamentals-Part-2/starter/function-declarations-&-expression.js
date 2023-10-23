// Function Declarations

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

const age1 = calcAge1(1997);

// Function Expressions

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(1990);

console.log(age1, age2);
