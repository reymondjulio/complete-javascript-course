// Looping backwrds & loops in loops

const reymond = ["Reymond", "Julio", 2023 - 1997, "Programmer", ["Michael", "Peter", "Steven"]];

// Looping Backwards
for (let i = reymond.length - 1; i >= 0; i--) {
  console.log(i, reymond[i]);
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} `);
  }
}
