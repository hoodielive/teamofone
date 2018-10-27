/** 
 * TCP sockets connections consist of two endpoints.
 * One endpoint binds to a numbered port while the other endpoint connects to a port.
 * In NodeJS, the bind and connect operations are provided by the 'net' module.
**/ 

"use strict"
const 
  net = require('net'), 
  server = net.createServer(function(connection) {
    // use connection object for data transfer 
  }); 

server.listen(5432); 

/** 
 * net.createServer() method takes a callback function and returns a Server object.
 * Node invokes the callback function wheenver another endpoint connects.
 * The connection parameter is a Socket object that you can use to send or receive data. 
 * Calling server.listen() binds the specified port.
 * In this case, we are binding port 5432.
**/ 


