var varName = 'Sabrina';
//Over write
varName = "Tina";
//or redefine it
var varName = 'Tina';
console.log("varName:", varName);

let nameLet = 'Jena';
//can reassign it
nameLet = "Mina";
//but cannot redefine it for example

console.log("nameLet:", nameLet);
//cannot reassign or redefine it
const nameconst = "Lina";
console.log("nameconst:", nameconst);

function petName() {
  var petName1 = "Dogi";
   //let petName1 = "Meo";
  //const petName1 = "Pack";
   return petName1;
}
//cannot call name of the variable outside the function
//console.log(petName1);
//const petName1 = petName();
//let petName1 = petName();
var petName1 = petName();
console.log(petName1);
//block scoping
const fullName = 'Sabrina Dowla';
let firstName;
//var firstName;
if (fullName) 
{ 
  
  //const firstName = fullName.split(' ')[0];
  //let firstName = fullName.split(' ')[0];
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}
  console.log(firstName);
