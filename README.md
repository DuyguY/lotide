# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lotide-my-library/lotide`

**Require it:**

`const _ = require('@lotide-my-library/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(assertArraysEqual)`:tests the equality of two arrays
* `function2(head)`:returns the first element of array
* `function3(tail)`:returns the array elements without first element
* `function4(middle)`:returns the middle element of array
* `function5(assertEqual)`:tests the equality of two given values
* `function6(assertObjectsEqual)`:tests the equality of two objects
* `function7(countLetters)`:returns the number of letter of string
* `function8(countOnly)`:returns an objec with the number of occurences of items marked as true in the array
* `function9(eqArrays)`:deep comparison of weather 2 arrays are equal
* `function10(eqObjects)`:deep comparison of weather 2 object are equal
* `function11(findKey)`:takes in an object and callback and returns the first key that meets the criteria specified in callback
* `function12(findKeyByValue)`:takes in an object and a value. It should scan the object and return the first key which contains the given value
* `function13(letterPositions)`: takes in a string and returns all indices of letter positions in the string.
* `function14(map)`: takes in an array and a callback and returns a new array based on the results of the callback on each item in the array
* `function15(takeUntil)`:takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `function16(without)`:return a subset of a given array, removing unwanted elements