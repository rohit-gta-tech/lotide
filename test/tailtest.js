const tail = require('../tail')
const assertEqual = require('../assertEqual')


assertEqual(tail([3,5,6,7]),[5,6,7]);
assertEqual(tail([3,5,6,7]),[6,7]);