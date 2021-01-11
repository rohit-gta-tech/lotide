const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  let obj2Keys = Object.keys(object2);
  
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const item in object1) {
    if (typeof object1[item] !== typeof object2[item]) {
      return false;
    }

    if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
      return false;
    }
    
    if(typeof object1[item] !== "object") {
      if(object1[item] !== object2[item])
      return false;
    } 

    if (typeof object1[item] === "object") {
      return eqObjects(object1[item], object2[item]);
    }
  }
  return true;
};

module.exports = eqObjects;



