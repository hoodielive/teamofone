const assert = require('assert')

regexPattern = /3456789/

if (regexPattern) {
  assert.throws(
    () => {
      throw new Error('Wrong value'); 
    }, 
    regexPattern
  )
}
