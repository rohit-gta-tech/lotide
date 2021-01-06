const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
    }
};

const countOnly = function(allItems, itemsToCount) {
    let countedObj = {};
    for (let name in itemsToCount) {
        let count = 0;
        if (itemsToCount[name] === true) {
            for (let i = 0; i < allItems.length; i ++) {
                if (allItems[i] === name) {
                    count ++
                }
            }
            if (count > 0) {
                countedObj[name] = count;
            }
        }
    }
    return countedObj;
}


const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);