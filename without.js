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


const without = function(sourceArr, removeArr) {
  let newArray = [];
  for (let i = 0; i < sourceArr.length; i++) {
    if (!removeArr.includes(sourceArr[i])) {
      newArray.push(sourceArr[i]);
    }
  }
  return newArray;
};

//const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]);
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//assertArraysEqual(without(["1", "2", "3","88"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);
//assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "4", 6, 4, 3]),["1","2"]);

