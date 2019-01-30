//angular object no longer bound with arrow function
//use es5 if you need argument
// const add = function(a,b) {
//   console.log(arguments);
//   return a + b;
// }
//even though we are passing 3 arguments here in the function
// we have two parameters a and b it's going to out all
// console.log(add(4, 5, 90));

//Transform this one to Arrow function
// const add = (a,b) => {
//  console.log(arguments);
//   return a + b;
// }
// console.log(add(4, 5, 90));



//This key word no longer bound
//create an object

// const user = {
//   name: 'Sabrina',
//   cities: ['Saint Paul', 'Minneapolis', 'Roseville'],
//   placesLived: function() {
//     const that = this;
//     console.log(this.name);
//     console.log(this.cities);
//     //no access of this inside the annonymous function
//     this.cities.forEach(function(city) {
//         console.log(that.name + ' has lived in ' + city);
//     });
//   }
// };
// user.placesLived();

//if we switch it to arrow function it will work
// const user = {
//   name: 'Sabrina',
//   cities: ['Saint Paul', 'Minneapolis', 'Roseville'],
//   placesLived: function() {
  
//     console.log(this.name);
//     console.log(this.cities);
//     //inside arrow funtion this has access
//     this.cities.forEach((city) => {
//         console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };
//but if we make the placeLived function to arrow function we will have an error
// user.placesLived();
/* const user = {
  name: 'Sabrina',
  cities: ['Saint Paul', 'Minneapolis', 'Roseville'],
  placesLived() {
    //inside arrow funtion this has access
    this.cities.forEach((city) => {
        console.log(this.name + ' has lived in ' + city);
    });
  }
};
user.placesLived();
 *///output: app.js:61 Uncaught TypeError: Cannot read property 'cities' of undefined
    // at Object.placesLived (app.js:61)
    // at app.js:66 -- because placesLived() function is no longer bind to the user object and if you go to the parent it has no cities.

    //We can use map() too, which will work same as forEach()
    const user = {
      name: 'Sabrina',
      cities: ['Saint Paul', 'Minneapolis', 'Roseville'],
      placesLived() {
        //inside arrow funtion this has access
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        
      }
    };
    console.log(user.placesLived());

    //Challenge 
    const multiplier = {
     //numbers = array of numbers
     numbers: [1, 6, 4],
     //multiplyBy is a single number
     multiplyBy:  2,
     //multiply is a method which will return a new array
     // which is doubled.
     multiply() {
       return this.numbers.map((num) => this.multiplyBy*num);
     }
    }
    console.log(multiplier.multiply());