/* const assertEqual = require('../assertEqual');
const head = require('../head');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hi");

assertEqual(head([5]), 9);
assertEqual(head([]), "Hi");  */
const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});
