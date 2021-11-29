

const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;
