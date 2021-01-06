const eqObjects = function(object1, object2) {
    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    if (obj1Keys.length !== obj2Keys.length) {
      return false;
    }
    for (const item of obj1Keys) {
      if (object1[item] !== object2[item]) {
        return false;
      }
    }
    return true;
  };

  const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`💚💚💚Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      } else {
        console.log(`😡😡😡Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
  };

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab,ba);
assertObjectsEqual(ab,abc);