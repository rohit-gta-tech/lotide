const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
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
}

eqArrays([1, 2, 3], [1, 2, 3]) 
eqArrays([1, 2, 3], [1, 2, 3, 4]) 
eqArrays([1, 2, 3], [3, 2, 1]) 

eqArrays(["1", "2", "3"], ["1", "2", "3"]) 
eqArrays(["1", "2", "3"], ["1", "2", 3]) 


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true); 