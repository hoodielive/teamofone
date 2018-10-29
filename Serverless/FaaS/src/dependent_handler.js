/** 
 * what follows is a handler that should not be written because:
 * you never want to make a function depend upon a vendor. 
 * your code show always be as agnostic as possible, so that migration is easy!
**/

const db = require('db').connect(); 
const mailer = require('mailer'); 

module.exports.saveUser = (event, context, callback) => {
  const user = { 
    email: event.email, 
    created_at: Date.now() 
  }; 

  db.saveUser(user, function(err) {
    if (err) {
      callback(err);  
    }
    else {
      mailer.sendWelcomeEmail(event.email);  
      callback();
    }
  });
};
