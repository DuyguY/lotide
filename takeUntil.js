const takeUntil = function(array, callback) {
  const taken = [];
  for ( let item of array ) {
    if ( callback(item)) {
      return taken;
    }
    else {
      taken.push(item);
    }
  }
  return taken;
}

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


const assertArraysEqual = function(actual, expected){

  const isEqual = eqArrays(actual, expected);
  isEqual ? console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`) 
          : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);

};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ] )

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ "I've", 'been', 'to', 'Hollywood' ] )