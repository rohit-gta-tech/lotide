const middle = function(array) {
  let midArr = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      midArr = array.slice(midIndex - 1, midIndex + 1);
    } else {
      midArr = array.slice(midIndex, midIndex + 1);
    }
  }
  return midArr;
};



module.exports = middle;