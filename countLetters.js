const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`๐๐๐ Assertion Failed: ${actual} !=== ${expected}`);
    return false;
  }
};


const countLetters = function(sentence) {
  let output = {};
  let string = sentence.replace(/ /g,'');
  
  for (let str of string) {
    if (output[str]) {
      output[str] ++;
    } else {
      output[str] = 1;
    }
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));
  
  