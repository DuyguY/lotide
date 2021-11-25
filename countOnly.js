const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);	
  } 
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // loop through element of allItems
  for (const item of allItems) {
    // check the item is truly
    if (itemsToCount[item]) {
      // inside the loop, 
      // increment the counter for each item:
      
      if (results[item]) {
        results[item] += 1;

      //   set a property with that string key to:
      //   the value that was already there (or zero if nothing there) with 1 added to it.

      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
]; 

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);