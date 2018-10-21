function Person(name, surname, age) {
  this.name = name; 
  this.surname = surname; 
  this.age = age; 
}; 

Person.prototype.getFullName = function() {
  return this.name + '' + this.surname; 
}; 

Person.older = function(person1, person2) {
  return ( person1.age >= person2.age ) ? person1 : person2; 
}; 

// Damn I feel bad that I like this syntactic sugar lunancy lol 

class Person2 {
  constructor(name, surname, age) {
    this.name = name; 
    this.surname = surname; 
    this.age = age; 
  };
  
  getFullname() {
    return this.name + ' '  + this.surname; 
  };

  static older(person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2; 
  }; 
}; 

const person1 = new Person2();
person1.getFullname('Larry', 'Dragon-Slayer', 900); 

const person2 = new Person2(); 
person2.getFullname('Brandon', 'Omo-Ogun', 1000); 
