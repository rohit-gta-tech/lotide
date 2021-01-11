const findKeyByValue = function (obj, str) {
    for (let item in obj) {
        if (str === obj[item]) {
            return item;
        }
    }
}

module.exports = findKeyByValue;


