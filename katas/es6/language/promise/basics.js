// 75: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!

describe('a Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

  it('`Promise` is a global function', function() {
    assert.equal(typeof Promise, 'function');
  });

  describe('the constructor', function() {
  
    it('instantiating it without params throws', function() {
      assert.throws(() => { new Promise(); });
    });  
    
    it('expects a function', function() {
      assert.doesNotThrow(() => { new Promise(() => {}); });
    });  
    
  });

  describe('a synchronous promise', function() {
  
    it('resolve a promise by calling the `resolve` function given as first parameter to the constructor', function() {
      let promise = new Promise((resolve) => {
        resolve();
      });
      
      promise
        .then(() => assert.ok(true))
        .catch(() => assert.ok(false, 'The promise is expected to resolve.'));
    });
  
    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', function() {
      let promise = new Promise((resolve) => {
        resolve(42);
      });
      
      promise
        .then((value) => assert.equal(value, 42))
        .catch(() => assert.ok(false, 'The promise is expected to resolve.'));
    });
  
    it('rejecting a promise is done by calling the callback given as 2nd parameter to the constructor', function() {
      let promise = new Promise((resolve, reject) => {
        reject();
      });
      
      promise
        .then(() => assert.ok(false, 'The promise is expected to be rejected.'))
        .catch(() => assert.ok(true));
    });

  });

  describe('an asynchronous promise', function() {
  
    it('can resolve later, also by calling the first callback given to the constructor', function(done) {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
      
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });
  
    it('reject it at some later point in time, calling the 2nd callback given to the constructor', function(done) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 100);
      });
      
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });

  describe('test library (mocha here) support for promises', function() {
    
    it('just returning the promise makes the test library check that the promise resolves', function() {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
      
      // return the promise to mocha, it has the checking for promise resolving built in, when it receives a promise
      return promise;
    });
  
  });
});
