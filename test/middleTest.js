const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", function() {
    it("returns [3] for [1,2,3,4,5]", function() {
        assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
    });

    it("returns [3] for [1,2,3,4,5,6]", function() {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3])
    });

    it("returns [3,4] for [1,2,3,4,5,6]", function() {
        assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4])
    });

    it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", function() {
        assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
    });

    it("returns [] for [1,2]", function() {
        assert.deepEqual(middle([1,2]), [])
    });

    it("returns [] for [1]", function() {
        assert.deepEqual(middle([1]), [])
    });

    it("returns [] for []", function() {
        assert.deepEqual(middle([]), [])
    });

});



/*assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);*/