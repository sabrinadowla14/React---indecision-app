
// //Es5 function we can give the name of the function
// const square = function(x) {
//    return 'Square:' + ' ' + x * x;
// }
// //OR
// // function square(x) {
// //   return 'Square:' + ' ' + x * x;
// // }
// //Es6 function we have to use Anonymous function
// // const squareArrow = (x) => {
// //   return 'SquareArrow:' + ' ' + x * x;
// // }
// console.log(square(8));
// // console.log(squareArrow(5));

// //Arrow function expression syntax, if it's returning only one line.
// const squareArrow = (x) => x * x;
// console.log(squareArrow(5));

//Challenge - use arrow function
//get firstName('Sabrina Dowla') -> Sabrina
//create regular arrow function
//create shorthand arrow function

const fullName = (firstName) => {
  if (firstName) {
    return firstName.split(' ')[0]
  }
}
console.log(fullName('Sabrina Dowla'));

const fullNameArrow = (firstName) => firstName.split(' ')[0];
console.log(fullNameArrow('Sabrina Dowla'));

