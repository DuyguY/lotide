const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const assertArraysEqual = function(actual, expected){

  const isEqual = eqArrays(actual, expected);
  isEqual ? console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`) 
          : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);

};

const eqArrays = function (input1, input2){
  if ( input1.length !== input2.length){
      return false;
  } 
  for ( let i = 0; i < input1.length; i++){
    if (input1[i] !==input2[i]) {
        return false;
    }  
  } 
    return true;

};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[ word.length - 1 ]);
const results3 = map(words, word => word[word.length]);

assertArraysEqual (results1, [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual (results2, [ 'd', 'l', 'o', 'r', 'm' ])
assertArraysEqual (results3, [ undefined, undefined, undefined, undefined, undefined ])
