const friend1 = "Reymond";
const friend2 = "Michael";
const friend3 = "Peter";

const friends = ["Reymond", "Michael", "Peter"];

console.log(friends); // Reymond, Michael, Peter
console.log(friends[0]); // Reymond
console.log(friends[1]); // Michael
console.log(friends[2]); // Peter
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // Peter

const y = new Array(1991, 1990, 1997, 1980);

friends[2] = "Caroline";
console.log(friends);

const firstName = "Reymond";
const reymond = [firstName, "Julio", 2023 - 1997, "Programmer", friends];
console.log(reymond);
console.log(reymond.length);

// Exercise
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
