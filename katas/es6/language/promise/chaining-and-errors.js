// ??: Promise - chaining and handling errors 
// To do: make all tests pass, leave the assert lines unchanged!

describe('error handling in chained promises', () => {
  
  it('normal functions used in a promise become promises, when they throw `catch()` can be used, no need for `new Promise()` every time', function() {
    const promise = Promise.resolve();
    
    promise.catch(() => {});
  });
  
  
  it('catch errors in intermediate promises', function() {
    
  });
  
  it('convert errors of intermediate steps', function() {
    
  });
  
  it('catch all vs. catch individual', function() {
    
  });
  
});