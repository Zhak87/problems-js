function numOfDigits(num) {
  return Math.abs(num).toString().length;
}

const testCases = [
  { int: 13124, expected: 5 },
  { int: 0, expected: 1 },
  { int: -12381428, expected: 8 },
  { int: 12, expected: 2 },
  { int: 42, expected: 2 },
  { int: 1000, expected: 4 },
  { int: 136, expected: 3 },
  { int: 1000000000, expected: 10 },
  { int: 2147483647, expected: 10 },
  { int: -2147483647, expected: 10 },
];

testCases.forEach(({ int, expected }) => {
  const result = numOfDigits(int);
  console.log(`numOfDigits(${int}) => ${result}, Expected: ${expected}`);
  if (result === expected) {
    console.log("Test Passed");
  } else {
    console.log("Test Failed");
  }
});
