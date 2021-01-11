const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Welcome", "To", "Earth"]), "Go back");
assertEqual(head([10,20,30]), 5);
assertEqual(head([-2]), -2);
assertEqual(head([]), 5);