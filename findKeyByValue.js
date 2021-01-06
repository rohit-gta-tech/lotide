const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
};

const findKeyByValue = function (obj, str) {
    for (let item in obj) {
        if (str === obj[item]) {
            return item;
        }
    }
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const fruits = {
    lemon: "citrus",
    mango: "Sweet",
    banana: "very sweet"
}

assertEqual(findKeyByValue(fruits, "citrus"), "lemon");
assertEqual(findKeyByValue(fruits, "very sweet"), "banana");
assertEqual(findKeyByValue(fruits, "verysweet"), undefined);

