const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`๐๐๐ Assertion Failed: ${actual} !=== ${expected}`);
    return false;
  }
};

const head = function(array) {
  let result = array.at(0);
  return result;

};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

