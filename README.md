# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rohit-gta-tech/lotide`

**Require it:**

`const _ = require('@rohit-gta-tech/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: retrieves the first element from the array
* `tail(array)`:  retrieves every element except the head (first element) of the array.
* `middle(array)`: retrieves the middle-most element(s) of the given array.