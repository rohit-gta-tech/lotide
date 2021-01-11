const tail = require('../tail')
const assertArraysEqual = require('../assertArraysEqual')


assertArraysEqual(tail([3,5,6,7]),[5,6,7]);
assertArraysEqual(tail([3,5,6,7]),[6,7]);