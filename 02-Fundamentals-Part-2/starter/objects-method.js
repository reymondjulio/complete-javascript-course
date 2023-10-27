// Objects Method

const reymond = {
  firstName: "Reymond",
  lastName: "Julio",
  birthYear: 1997,
  job: "Programmer",
  friends: ["Michael", "Peter", "Steven"],
  hasDrivenLicense: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old, and he has ${this.hasDrivenLicense ? "a" : "no"} driver's license.`;
  },
};

console.log(reymond.calcAge());
console.log(reymond.age);
console.log(reymond.age);
console.log(reymond.age);

// Challenge
// Reymond is a 23-years old programmer, and he has a driver's license
console.log(reymond.getSummary());
