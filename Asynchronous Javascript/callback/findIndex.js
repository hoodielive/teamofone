/** 
 * Returns the index of the first elem in the array for which the callback returns a truthy value. 
 * -l is returned if the callback never returns a truthy value. 
*/

let arr = [3, 4, 6, 2, 1]; 

function callback(curElem, curIndex, array)
{
  // callback implemented by caller of function
  console.log(curElem, curIndex, array)
}

function findIndex(arr, callback)
{
  // findIndex code to be implemented 
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i; 
    }
  }
  return -1; 
}

findIndex(arr, callback)
