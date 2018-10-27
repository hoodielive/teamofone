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
