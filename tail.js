const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
  };

const tail = function(arr) {
    return arr.slice(1);
}

let x = [3];
let y = tail(x);
console.log(x,y);


assertEqual(tail([3,5,6,7])[2],76);
