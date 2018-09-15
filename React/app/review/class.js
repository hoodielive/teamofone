class Person {
  constructor(name) {
    this.name = name; 
  }
  
  walk() {
    console.log('walk');  
  }
}

// inheritance or composition 

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree; 
  }
  
  teach() {
    console.log("teach"); 
  }
}

const person = new Person('hood'); 
const teacher = new Teacher('hoodster', 'MSc')
