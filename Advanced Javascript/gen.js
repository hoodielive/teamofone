const runner = gen => (...args) => { 
  const generator = gen(...args); 
  return new Promise((resolve, reject) => { 
    const run = prev => { 
      const { value, done } = generator.next(prev); 
      if (done) {
        resolve(value); 
      } 
      else if ( value instanceof Promise) {
        value.then(run, reject);
        else {
          run(value); 
        }
      }
      run(); 
    });  
  }
}
