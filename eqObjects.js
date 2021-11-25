//eqArrays
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

// New function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // checking the number of keys per object
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (const value in object1) {
      if (Array.isArray(object1[value])) { // to check the value of the key is an array
        const results = eqArrays(object1[value], object2[value]);
        if (results === false) {
          return false;
        }
      } else if ((typeof object1[value]) === 'object') { // to check the value of the key is an object
        let results = eqObjects(object1[value], object2[value]);
        if (!results) {
          return false;
        }
      
      } else if (object1[value] !== object2[value]) { //to check the value of the key is a primitive value
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);	
  } 
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba),true); 


const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); 

