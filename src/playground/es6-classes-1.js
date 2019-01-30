class Person {
  
  constructor(name='Annonymous', age=0) {
    this.name = name,
    this.age = age
  }

  getDescription() {
   return `${this.name} is ${this.age} years old.`
  }
  getGreeting() {
   
    return `Hi, I am ${this.name}!`;  
  }
}

class Student extends Person {
  //we cannot see the major, we need to override the 
  //constructor
  constructor(name, age, major) {
    //calling the parent constructor function
    super(name, age);
    this.major = major;
  }
  //it will return true if student has major and false
  //if it does not have any major
  hasMajor() {
    //return only if it is true
    return !!this.major;
  }
  //We are going to override getDescription method
  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += `There major is ${this.major}.`
    }
    return description;

   }

}//class Student

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;

  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if(this.hasHomeLocation()) {
      greeting += ` I am visiting from ${this.homeLocation}`;  
    }
     
    return greeting;  
  }

}
//Create a new class Traveler which extend Person class
//add support for home location. which is the 3rd argument
//Override getGreeting()
//1. Hi I am Sabrina Dowla. I am visiting from Minnesota.
//2. Hi I am Sabrina Dowla.
const me = new Traveler('Sabrina Dowla', 26, 'Minnesota.');
console.log(me.getGreeting());
const other = new Traveler('Tina');
console.log(other.getGreeting());