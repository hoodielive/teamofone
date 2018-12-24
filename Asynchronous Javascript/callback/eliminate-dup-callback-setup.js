function sendMessageConsole(message) {
  console.log(message); 
}

function sendMessageAlert(message) {
  console.log(message); 
}

function sendMessageConfirmation(message) {
  return confirm(message); 
}

sendMessageAlert("Lots of duplication!"); 
