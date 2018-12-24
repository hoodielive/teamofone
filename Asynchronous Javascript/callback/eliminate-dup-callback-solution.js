function sendMessage(message, callback)
{
  return callback(message); 
}

sendMessage("Message for console", console.log); 

sendMessage("Message for alerting", console.log); 

let answer = sendMessage("Are you sure??", confirm)
