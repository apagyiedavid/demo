// script.js

const arg = process.argv[2];

// Attempt to convert to integer using parseInt
const parsed = parseInt(arg, 10);

// Check if parsed is a valid integer and the conversion makes sense
// We check that arg is not undefined and parsed is not NaN, and that parsed when converted back to string matches the arg (possibly with trimming)
if (arg !== undefined && !Number.isNaN(parsed) && String(parsed) === arg.trim()) {
  console.log("My number: " + parsed);
} else {
  console.log("Not a number");
}
