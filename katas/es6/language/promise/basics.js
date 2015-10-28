// 75: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

  it('`Promise` is a global function', function() {
    const expectedType = '???';
    assert.equal(typeof Promise, expectedType);
  });

  describe('the constructor', function() {
  
    it('instantiating it without params throws', function() {
      const fn = () => { Promise }
      assert.throws(fn);
    });  
    
    it('expects a function as parameter', function() {
      const param = null;
      assert.doesNotThrow(() => { new Promise(param); });
    });  
    
  });

  describe('simplest promises', function() {
  
    it('resolve a promise by calling the `resolve` function given as first parameter', function(done) {
      let promise = new Promise((resolve) => {
      });
      
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });
  
    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function(done) {
      let promise = new Promise((resolve) => {
        resolve();
      });
      
      promise
        .then(value => {assert.equal(value, 42); done(); })
        .catch(() => done(new Error('The promise is expected to resolve with 42!')));
    });
  
    it('rejecting a promise is done by calling the callback given as 2nd parameter', function(done) {
      let promise = new Promise(() => {
      });
      
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('an asynchronous promise', function() {
  
    it('can resolve later, also by calling the first callback', function(done) {
      let promise = new Promise(() => {
        setTimeout(() => resolve(), 100);
      });
      
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });
  
    it('reject it at some later point in time, calling the 2nd callback', function(done) {
      let promise = new Promise((reject) => {
        setTimeout(() => reject(), 100);
      });
      
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('test library (mocha here) support for promises', function() {
    
    it('just returning the promise makes the test library check that the promise resolves', function() {
      let promise = new Promise((reject, resolve) => {
        resolve();
      });
      
      // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
      return promise;
    });
  
  });
});
