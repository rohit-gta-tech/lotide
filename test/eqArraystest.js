const assert = require('chai').assert
const eqArrays = require('../eqArrays');

describe("#eqArrays", function() {
    it("return [1,2,3] for [1,2,3]", function() {
        assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
    });
    it("return [] for []", function() {
        assert.isTrue(eqArrays([], []));
    });
    it("return [1,2,3] for [1,2,3,4]", function() {
        assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
    });
    it("return [1,2,3] for [3,2,1]", function() {
        assert.isFalse(eqArrays([1, 2, 3], [3,2,1]));
    });
    it("return [1,2,3] for [1,2,'3']", function() {
        assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
    });
    it("return [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]] for [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]]", function() {
        assert.isTrue(eqArrays([1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]], [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]]));
    });
    it("return [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,4]]]]] for [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]]", function() {
        assert.isFalse(eqArrays([1, 2, [1,[1,2,3,4,[1,2,3,[1,2,4]]]]], [1, 2, [1,[1,2,3,4,[1,2,3,[1,2,3]]]]]));
    });


});



