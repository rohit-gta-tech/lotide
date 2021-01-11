const assert = require('Chai').assert;
const flatten = require('../flatten');


describe("#flatten", function() {
    it("returns [1,2,3] for [1,2,3]", function() {
        assert.deepEqual(flatten([1,2,3]),[1,2,3]);
    });

    it("returns [] for []", function() {
        assert.deepEqual(flatten([]), []); 
    });

    it("returns [1] for [1]", function() {
        assert.deepEqual(flatten([1]),[1]);
    });

    it("returns [1,2,3,5,6,7] for [1,2,3,[5,6,7]]", function() {
        assert.deepEqual(flatten([1,2,3,[5,6,7]]), [1,2,3,5,6,7]);
    });

    it("returns [1,2,3,5,6,7,8] for [1,2,3,[5,6,[7,8]]]", function() {
        assert.deepEqual(flatten([1,2,3,[5,6,[7,8]]]), [1,2,3,5,6,7,8]);
    });
    it("returns [1,2,3,5,6,7,8,9,10] for [1,2,3,[5,6,[7,8,[9,10]]]]", function() {
        assert.deepEqual(flatten([1,2,3,[5,6,[7,8,[9,10]]]]), [1,2,3,5,6,7,8,9,10]);
    });
});


console.log(flatten([1,2,3,[5,3,4],['a','b']]));