const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`💚💚💚Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
  }
};


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

const middle = function(array) {
  let midArr = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArr = array.slice(midIndex - 1, midIndex + 1);
    } else {
      midArr = array.slice(midIndex, midIndex + 1);
    }
  }
  return midArr;
};

middle([1]);
middle([1, 2]);
middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);


assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);