const countLetters = function(sentence){
  const letterCount = {}
  for (const letter of sentence) { 
    if ( letter === ' ') { //avoid space in sentence
      continue;
    }
    // checking the letter if exist and increase one
    if (letterCount[letter]) { 
      letterCount[letter] += 1;
    } 
    // if the letter not exist initialize 1
    else { 
      letterCount[letter] = 1;
    }
  } 
  return letterCount;
}

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);	
  } 
};
const result = countLetters("lighthouse in the house");
 assertEqual(result["l"], 1);
 assertEqual(result["i"], 2);
 assertEqual(result["g"], 1);
 assertEqual(result["h"], 4);
 assertEqual(result["t"], 2);
 assertEqual(result["o"], 2);
 assertEqual(result["u"], 2);
 assertEqual(result["s"], 2);
 assertEqual(result["e"], 3);
 assertEqual(result["n"], 1);
