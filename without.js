const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};
  
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`💚💚💚Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let finalArray = [];
  for (let i = 0; i < source.length; i++) {
    let count = 0;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] !== itemsToRemove[j]) {
        count++;
      }
      if (count === itemsToRemove.length) {
        finalArray.push(source[i]);
      }
    }
  }
  return finalArray;
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);
without(["1", "2", "3", 4, 5, 6, "5", 3, "2", 2, "2"], [1, 2, "3", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);