// Functions

function logger() {
  console.log("My name is Reymond");
}

// calling, running, invoking function
logger();
logger();
logger();

function fruitProcessor(apples, orange) {
  console.log(apples, orange);
  const juice = `Juice with ${apples} apples and ${orange} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(1, 5);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 7);
console.log(appleOrangeJuice);
