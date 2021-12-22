
const flatten = function (array) {
  let newArr = [];
  return Array.isArray(array) ? newArr.concat.apply(newArr, array.map(flatten)) : array;
}
console.log(flatten([1, [2, [3, 4], 5, [6]]]));