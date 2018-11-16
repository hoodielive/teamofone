#!/usr/bin/env node

function doAsyncTask(cb) {
  cb();
}
doAsyncTask(_ => console.log(message));

let message = "Callback Called";
