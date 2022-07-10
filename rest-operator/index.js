/*
  The REST operator is used to get all the parameters defined in the function. 
  That is when we do not know how many parameters will be passed in the function
*/

// commom function.
// imagine a function with all these parameters with their names that make sense,
// it is unreadable and bad for maintenance
function sum(a, b, c, d, e, f, g) {
  return a + b + c + d + e + f + g;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7)); // 28

// now wit rest operator
function sumRest(...value) {
  const result = value.reduce((acc, curr) => (acc += curr), 0);

  return result;
}
console.log(sumRest(1, 2, 3, 4, 5, 6, 7)); // 28
