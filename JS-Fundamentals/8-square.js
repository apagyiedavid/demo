// square.js

const arg = process.argv[2];
const size = parseInt(arg, 10);

if (!Number.isInteger(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    // For each row, print size number of X's
    console.log("X".repeat(size));
  }
}
