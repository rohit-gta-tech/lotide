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

const flatten = function(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    let innerArray = [];
    if (!Array.isArray(arr[i])) {
      innerArray.push(arr[i]);
    } else (
      innerArray = arr[i]
    );
    for (let j = 0; j < innerArray.length; j++) {
      flatArray.push(innerArray[j]);
    }
  }
  return flatArray;
};

flatten([1,2,3,[5,3,4],['a','b']]);
