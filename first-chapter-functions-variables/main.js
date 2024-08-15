console.log("Hello World")

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your name? ", (name) => {
    console.log(`Hello ${name}!`)
    rl.close()
})

let name = "Giorgi Menteshashvili";
let [firstName, lastName] = name.split(" ");

console.log(name);
console.log("Name: " + firstName);
console.log("Surname: " + lastName);

let x = 20
let y = 30

console.log(x - y);

console.log(7 < 5);
console.log(7 > 5);