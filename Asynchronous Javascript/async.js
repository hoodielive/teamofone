#!/usr/bin/env node 

// Master Asynchronous Javascript 

function doAsyncTask(cb) {
  cb();
}
doAsyncTask(_ => console.log(message));

let message = "Callback Called";
