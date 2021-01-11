const assert = require('Chai').assert;
const countOnly = require('../countOnly');


describe("countOnly", function() {
    it("returns {Jason:1, Fang:2} for {'Jason': true, 'Karima': true, 'Fang': true, 'Agouhanna': false }", function() {
        const firstNames = ["Karl","Salima","Agouhanna","Fang","Kavith","Jason","Salima","Fang","Joe"];
        assert.deepEqual(countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }),{Jason:1, Fang:2});
    });
});

