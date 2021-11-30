// FUNCTION IMPLEMENTATION


const tail = function (array) {
   let list = [];
   for( let i = 1; i < array.length; i++) {
       list.push(array[i]);
  }
  return list;

}

module.exports = tail;

