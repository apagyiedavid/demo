// firstArg.js

const args = process.argv;   // process.argv is the array of command-line arguments

// process.argv[2] is the first real user-argument, since:
//   argv[0] = path to node executable
//   argv[1] = path to this script
const first = args[2];

if (first === undefined) {
  console.log("No argument");
} else {
  console.log(first);
}
