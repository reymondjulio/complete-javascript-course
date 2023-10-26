const reymond = {
  firstName: "Reymond",
  lastName: "Julio",
  age: 2023 - 1997,
  job: "Programmer",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(reymond);
console.log(reymond.lastName);
console.log(reymond["lastName"]);

const nameKey = "Name";
console.log(reymond["first" + nameKey]);
console.log(reymond["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Reymond? Choose between firstName, lastName, age, job, and friends");

if (reymond[interestedIn]) {
  console.log(reymond[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}

reymond.location = "Indonesian";
reymond["Instagram"] = "@reymondjulio";
console.log(reymond);

// Challenge
// "Reymond has 3 friends, and his best friend is called Michael"
console.log(`${reymond.firstName} has ${reymond.friends.length} friends, and his best friend is called ${reymond.friends[0]}`);
