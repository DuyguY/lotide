// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected){
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } 
  else {
    console.log(undefined);
  }
};

const tail = function (array) {
   let list = [];
   if ( array.length > 1){
    for( let i = 1; i < array.length; i++) {
      list.push(array[i]);
    }
  }
  return list;

}

module.exports = tail;

