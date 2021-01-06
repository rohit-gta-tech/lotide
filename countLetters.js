const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const countLetters = function(str) {
    let countObj ={}
    let strWoSpace = str.split(' ').join('');
    for (let i = 0; i < strWoSpace.length; i++) {
        if(countObj[strWoSpace[i]]) {
            countObj[strWoSpace[i]]++
        } else {
            countObj[strWoSpace[i]] = 1
        }
    }
    return countObj
}



