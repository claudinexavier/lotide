const eqArrays = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i]) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  const equalResult = eqArrays(actual, expected);
  if (equalResult === true) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);