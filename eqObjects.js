const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  for (const item in object1) {
    if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return true;
};

/*const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  console.log(obj1Keys, obj2Keys)
  

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const item in object1) {
    if (typeof object1[item] !== typeof object2[item]) {
      return false;
    } 
    else if(typeof object1[item] === typeof object2[item] && typeof object1[item] !== "object") {
      if(object1[item] !== object2[item]) {
        return false;
      } 
      else if (typeof object1[item] === typeof object2[item] && Array.isArray(object1[item]) || Array.isArray(object2[item])) {
        return false;
      } 
      else if (typeof object1[item] === "object" && typeof object1[item] === "object" && !Array.isArray(object1[item]) && !Array.isArray(object2[item])) {
        eqObjects(object1[item], object2[item]);
      }
    }
  }
  return true;
};*/



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ba, abc), false);
assertEqual(eqObjects(abc, abc), true);

//assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
//assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
//assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)
