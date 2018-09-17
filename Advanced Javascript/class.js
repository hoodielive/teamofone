class Workers {
  constructor(name, title, id) {
    this.name = name 
    this.title = title
    this.id = id 
  }

  getProfession(title) {
    console.log('my profession is', title) 
  }

  setID() {
     let count = 0; 
     return console.log(count += 1)
  }
}

class Engineer extends Workers {
  constructor(name, title, id, experience) {
    super(name,title,id); 
    this.experience = experience; 
  }

  returnSomeMessage() {
    console.log('You have experience', this.experience) 
  }
}


let worker1 = new Workers()

worker1.getProfession('engineer')
worker1.setID('1'); 

const engineer = new Engineer(); 
engineer.returnSomeMessage(); 
