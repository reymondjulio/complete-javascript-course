// Looping array breaking & continuing

const reymond = ["Reymond", "Julio", 2023 - 1997, "Programmer", ["Michael", "Peter", "Steven"]];

const types = [];

for (let i = 0; i < reymond.length; i++) {
  // Reading from reymond array
  console.log(reymond[i], typeof reymond[i]);

  // Filling types array
  // types[i] = typeof reymond[i];
}

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}

console.log(ages);

// Continue & break

console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < reymond.length; i++) {
  if (typeof reymond[i] !== "string") continue;
  {
    console.log(reymond[i], typeof reymond[i]);
  }
}

console.log(`--- ONLY NUMBERS ---`);
for (let i = 0; i < reymond.length; i++) {
  if (typeof reymond[i] === "number") break;
  {
    console.log(reymond[i], typeof reymond[i]);
  }
}
