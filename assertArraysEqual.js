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
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [3,2,1]);
assertArraysEqual(["1","2","3"], ["1","2","3"]);
assertArraysEqual(["1","2","3"], ["1","2",3]);
