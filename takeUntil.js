const takeUntil = function(array, callback) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            result.push(array[i])
        } else {
            return result;
        }
    }
    return result;
  }

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ['There', 'Is', 'Nothing', 'But', 'Is', 'There', 'Something']
assertArraysEqual(takeUntil(data3, x => x === 'Nothing'), ['There', 'Is'])

const data4 = [1,3,5,7,9,10]
assertArraysEqual(takeUntil(data4, x => x % 2 === 0), [1,3,5,7,9])

assertArraysEqual(takeUntil(data4, x => x % 2 === 1), [])