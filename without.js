const without = function ( source, itemsToRemove){

   //generate copyArray
   let copyArray = [...source];
  // loop through itemsToRemove array 
  for ( let i = 0; i < itemsToRemove.length; i++){
    //if item exist in array remove it from copyArray
    if ( copyArray.includes(itemsToRemove[i])){
      copyArray = copyArray.filter( element => element !== itemsToRemove[i]);
    }
  }
  return copyArray;
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



const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


