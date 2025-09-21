// script.js

const args = process.argv.slice(2); // Extract arguments

if (args[0] === undefined || args[1] === undefined) {
  console.log("Two arguments are required.");
} else {
  console.log(`${args[0]} is ${args[1]}`);
}
