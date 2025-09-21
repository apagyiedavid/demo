// addScript.js

function add(a, b) {
  return a + b;
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

const int1 = parseInt(arg1, 10);
const int2 = parseInt(arg2, 10);

if (Number.isNaN(int1) || Number.isNaN(int2)) {
  console.log("Both arguments must be integers");
} else {
  console.log(add(int1, int2));
}
