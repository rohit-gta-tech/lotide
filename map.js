const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0])
console.log(results1)



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

const results2 = map(['Path', 'Of', 'The', 'Righteous', 'Map'], word => word.length)
assertArraysEqual(results2, [4,2,3,9,3]);

const results3 = map([4,5,2,6,9], item => item/2)
assertArraysEqual(results3, [2,2.5,1,3,4.5])
assertArraysEqual(results3, [2,2.5,1,3,4.5,5])

