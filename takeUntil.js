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


// Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  const output = [];
  for (const value of array) {
    if (!callback(value)) {
      output.push(value);
    } else {
      return output;
    }
  }
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2, -1, 2, 4, 5]);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]);
console.log(results2);

//[ 1, 2, 5, 7, 2 ]
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]