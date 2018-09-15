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
