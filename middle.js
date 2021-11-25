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

const middle = function(array) {

  let middleElement = [];
  let middleIndex = -1;

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if ( array.length < 3 ) {
     return middleElement;
  }
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  else if (array.length % 2 !== 0){

    middleIndex = array[((1 + array.length) / 2) - 1];
    middleElement.push(middleIndex);
  }
  // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  else {
    let smallMiddle = Math.floor(array.length / 2);
    let bigMiddle = smallMiddle + 1;
    middleElement.push(smallMiddle);
    middleElement.push(bigMiddle);
  }

  return middleElement;
  
}

assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3] );
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
