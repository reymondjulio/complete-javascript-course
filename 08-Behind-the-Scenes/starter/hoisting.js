// Variable

console.log(me);
console.log(job);
console.log(year);

var me = 'Reymond';
let job = 'teacher';
const year = 1997;

// Function
console.log(addDelc(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDelc(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
