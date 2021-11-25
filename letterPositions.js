const letterPositions = function(sentence) {
  let results = {};
  for ( let i = 0; i < sentence.length; i ++ ){ // loop through all letter in sentence
    const letter = sentence[i];
    if (!results[letter]){    // checking to letter exist in results object 
        results[letter] = [i];
    }
   else {   // checking to letter not exist push in results object 
     results[letter].push(i);
   }
  }
  return results;
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

const assertArraysEqual = function(actual, expected){

  const isEqual = eqArrays(actual, expected);
  isEqual ? console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`) 
          : console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);

};
assertArraysEqual(letterPositions("hello"), {h:[0], e:[1], l:[2,3], o:[4]});
assertArraysEqual(letterPositions("hello").e, [1]); 
assertArraysEqual(letterPositions("hi there").e, [5, 7]); 