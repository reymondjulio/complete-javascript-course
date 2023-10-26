const friends = ["Reymond", "Michael", "Peter"];

// Add Elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Michael"));
console.log(friends.includes("Bob"));

if (friends.includes("Michael")) {
  console.log("You have a friend called Michael");
}
