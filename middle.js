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

const middle = function(array) {
  let newMid = [];
  if (array.length === 1 || array.length === 2) {
    newMid = [];
  } else if (array.length % 2 === 1) {
    newMid.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    newMid.push(array[array.length / 2 - 1], array[array.length / 2]);
  }
  return newMid;
};


// even
/*
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4])

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

// one or two elements - no middle

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []

// odd

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
*/

assertArraysEqual(
  middle([1, 2, 3]), [2]);