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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


const testOne = ['light', 'house', 'labs'];
const testTwo = [5, 10, 15]
const testThree = [10, 20, 30]


assertArraysEqual(map(testOne, word => word[0]), ['l', 'h', 'l']);
assertArraysEqual(map(testTwo, num => num * 2), [10, 20, 30]);
assertArraysEqual(map(testThree, num => num + 2), [12, 22, 32]); 