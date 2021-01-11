const assert = require('Chai').assert;
const head = require('../head');

describe("#head", function() {
    it("returns 1 for [1,2,3]", function() {
        assert.strictEqual(head([1,2,3]),1);
    });

    it("returns '5' for ['5']", () => {
        assert.strictEqual(head(['5']), '5'); 
    });

    it("returns 5 for [5,6,7]", function() {
        assert.strictEqual(head([5,6,7]),5);
    });

    it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", function() {
        assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]),"Hello");
    });

    it("returns 'Go back' for ['Welcome', 'To', 'Earth']", function() {
        assert.strictEqual(head(["Welcome", "To", "Earth"]),"Go back");
    });

    it("returns -2 for [-2]", function() {
        assert.strictEqual(head([-2]),-2);
    });

    it("returns 5 for []", function() {
        assert.strictEqual(head([]),5);
    });
});


