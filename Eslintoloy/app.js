let bar = 10;
let foo = bar + 20; 

const obj = {
  name: 26,
  age: 'Larry',
};

const work = new Promise((resolve, reject) => {
  resolve('some data'); 
}); 

work.then((data) => {
  console.log(data); 
})
