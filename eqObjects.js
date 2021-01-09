const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*const eqObjects = function(object1, object2) {
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
};*/

const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  console.log(obj1Keys, obj2Keys)
  

  if (obj1Keys.length !== obj2Keys.length) {
    console.log(obj1Keys, obj2Keys)
    return false;
  }

  for (const item in object1) {
    if (typeof object1[item] !== typeof object2[item]) {
      return false;
    } 
    
    else {
      if(typeof object1[item] !== "object") {
        if(object1[item] !== object2[item])
        return false;
      } 
      else if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
        return false;
      } 
      else if (typeof object1[item] === "object" && !Array.isArray(object1[item]) && !Array.isArray(object2[item])) {
        return eqObjects(object1[item], object2[item]);
      }
    }
  }
  return true;
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ba, abc), false);
assertEqual(eqObjects(abc, abc), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)


let aaaa = {
  a:{x:1,
    y:{e:2,
       f:44},
    z:2},
  b:{n:1,
    m:2},
  c:2
}

let bbbb = {
  a:{x:1,
    y:{e:2,
       f:444},
    z:2},
  b:{n:4,
    m:2},
  c:2
}

let cccc = {
  a:{x:1,
    y:{e:2,
       f:44},
      },
  b:{n:4,
    m:2},
  c:2
}


assertEqual(eqObjects(aaaa, aaaa), true)
assertEqual(eqObjects(aaaa, bbbb), false)
assertEqual(eqObjects(aaaa, cccc), false)
assertEqual(eqObjects(bbbb, cccc), false)