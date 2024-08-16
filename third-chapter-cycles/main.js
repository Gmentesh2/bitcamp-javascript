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
//

//let number = getNumber();
//logHello(number);

function getNumber() {
  while (true) {
    let n = Number(prompt("What is N? "));
    if (n > 0) {
      return n;
    }
  }
}

function logHello(count) {
  for (let i = 0; i < count; i++) {
    console.log("Hello");
  }
}

// arrays

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(i + 1, arr[i]);
}
//console.table(arr)

// for in cycle

let numbers = [2, 2, 3, 12, 99, 233];

for (let i in numbers) {
  console.log(Number(i) + 1, numbers[i]);
}

// for of cycle

let numbers2 = [22, 33, 332, 55, 32];

for (let number of numbers2) {
  console.log(number);
}
console.log("---------------------------------");
// objects

let animals = [
  {
    name: "dog",
    species: "animal",
    age: 4,
    numberOfLegs: 4,
  },
  {
    name: "cat",
    species: "animal",
    age: 2,
    numberOfLegs: 4,
  },
  {
    name: "pigeon",
    species: "bird",
    age: 1,
    numberOfLegs: 2,
  },
  {
    name: "tiger",
    species: "animal",
    age: 5,
    numberOfLegs: 4,
  },
];

for (let i = 0; i < animals.length; i++) {
  console.log(
    `Name: ${animals[i].name} \nSpecies: ${animals[i].species}\nAge: ${animals[i].age}\nNumber of legs: ${animals[i].numberOfLegs}`
  );
}

