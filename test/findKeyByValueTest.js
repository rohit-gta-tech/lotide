const assert = require('Chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", function() {
    it("The wire should return drama", function() {
        const bestTVShowsByGenre = { 
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama:  "The Wire"
        }
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    });

    context("findKeyByValueinFruits", function() {
        const fruits = {
            lemon: "citrus",
            mango: "Sweet",
            banana: "very sweet"
        }
        it("banana should return very sweet", function() {
            assert.strictEqual(findKeyByValue(fruits, "very sweet"), "banana");
        });
    
        it("lemon should return citrus", function() {
            assert.strictEqual(findKeyByValue(fruits, "citrus"), "lemon");
        });
    });
});

    

