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

eqArrays([1,2,3], [1,2,3]);
eqArrays([1,2,3], [3,2,1]);
eqArrays(["1","2","3"], ["1","2","3"]);
eqArrays(["1","2","3"], ["1","2",3]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);