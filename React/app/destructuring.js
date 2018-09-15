const address = { 
  street: '', 
  city: '', 
  country: '', 
}

//const street = address.street; 
//const city = address.city; 
//const country = address.country; 
// too cumbersome, just do destructuring 

const { street, city, country } = address; 

const { street: st } = address; // object destructuring and aliasing // now street will be referenced as st


