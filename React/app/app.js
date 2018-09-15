const person = {
  name: 'osun', 
  walk() {
    console.log(this);  
  },
  talk() {}
}; 

person.walk(); 

const targetMember = 'name'; 
person[targetMember.value] = 'oya'; 

// come now, let me bind you baby

const walk = person.walk.bind(person) // now walk object is bound to the walk function in person 
walk(); 

// funcs are objects || walk.<> || bind a function to an object with the bind method | bind(determines the value of this)


const square = function(member) {
  return number * number; 
}

// same thing with arrow 
const square2 = number => {
  return number * number;
}

// same thing 
const square3 = number => number * number; 

console.log(square)
console.log(square2)
console.log(square3)

const jobs = [ 
  { id: 1, isActive: true },
  { id: 2, isActive: true }, 
  { id: 3, isActive: false }, 
]; 

// so we filter 
const activeJobs = jobs.filter(function(job) {
  return job.isActive; 
})

console.log(activeJobs)

// but I can make you cleaner 
const activeJobs2 = jobs.filter(job => job.isActive)

console.log(activeJob2)
