const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", function() {
    it("returns [5,6,7] for [3,5,6,7]", function() {
        assert.deepEqual(tail([3,5,6,7]), [5,6,7])
    });

    it("returns [6,7] for [3,5,6,7]", function() {
        assert.deepEqual(tail([3,5,6,7]), [6,7])
    });

    it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", function() {
        assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
    });

    it("returns [] for [3]", function() {
        assert.deepEqual(tail([3]), [])
    });

    it("returns [] for []", function() {
        assert.deepEqual(tail([]), [])
    });

});

