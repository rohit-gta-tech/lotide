const assert = require('Chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", function() {
    it("rreturns equivalency for deep objects", function() {
        let aaaa = {
            a:{x:1,
              y:{e:2,
                 f:44},
              z:2},
            b:{n:1,
              m:2},
            c:2
          }
          
          let bbbb = {
            a:{x:1,
              y:{e:2,
                 f:444},
              z:2},
            b:{n:4,
              m:2},
            c:2
          }
          
          let cccc = {
            a:{x:1,
              y:{e:2,
                 f:44},
                },
            b:{n:4,
              m:2},
            c:2
          }
        assert.isTrue(eqObjects(aaaa, aaaa))
        assert.isFalse(eqObjects(aaaa, bbbb))
        assert.isFalse(eqObjects(aaaa, cccc))
        assert.isFalse(eqObjects(bbbb, cccc)) 
    });
});
