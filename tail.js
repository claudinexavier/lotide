const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`๐๐๐ Assertion Failed: ${actual} !=== ${expected}`);
    return false;
  }
};

const tail = function(array) {
  let result = array.slice(1);
  return result;
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!