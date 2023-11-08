'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassingning outer scope's variable
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUPUT!';
    }
    // console.log(str);
    console.log(millenial);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Reymond';
calcAge(1997);
