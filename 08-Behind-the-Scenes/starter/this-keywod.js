console.log(this);

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAge();

const calcAgeArrow = birthYear => {
  console.log(2023 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);

const reymond = {
  year: 1997,
  calcAge: function () {
    console.log(this);
    console.log(birthYear - this.year);
  },
};
reymond.calcAge();

const caroline = {
  year: 2017,
};

caroline.calcAge = reymond.calcAge;
caroline.calcAge();
