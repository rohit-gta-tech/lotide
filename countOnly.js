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

module.exports = countOnly;