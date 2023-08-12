// importing some modules
let randomize = require("generate-password");

// generate mutiple passwords with conditions below
let passwords = randomize.generateMultiple(5, {
length: 6,
numbers: true,
strict: false,
symbols: true,
exclude: "",
lowercase: true,
uppercase: true,
excludeSimilarCharacters: true 
});
console.log(passwords);

