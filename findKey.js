// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);	
  } 
};

const findKey = function ( object, callback) {

  for ( const index in object){
    if (callback(object[index])){ // cheqing key by value 
      return index;
    }    
  }
  return undefined;
}



const result1= findKey({
  "Blue Hill": { stars: 1 },
  "Akelarre":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3) 


let result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 

assertEqual(result1, "Akelarre"); 
assertEqual(result2, "noma"); 