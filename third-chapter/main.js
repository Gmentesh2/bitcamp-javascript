// cycles
// while cycle

let i = 0;

while (i <= 50) {
  console.log(i);
  i++;
}
console.log("--------------------------------------");
// for cycle

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("--------------------------------------");

// information's validation
let n = Number(prompt("What is N? ")); //
while (true) {
  if (n <= 0) {
    n = Number(prompt("What is N? "));
  } else {
    break;
  }
}
