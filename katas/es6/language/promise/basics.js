// ??: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!

describe('A Promise represents an operation that hasn`t completed yet, but is expected in the future', function() {

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
  
    it('that resolves', function() {
      let promise = new Promise((resolve) => {
        resolve();
      });
      
      promise
        .then(() => assert.ok(true))
        .catch(() => assert.ok(false, 'The promise is expected to resolve.'));
    });
  
    it('that resolves and returns a value', function() {
      let promise = new Promise((resolve) => {
        resolve(42);
      });
      
      promise
        .then((value) => assert.equal(value, 42))
        .catch(() => assert.ok(false, 'The promise is expected to resolve.'));
    });
  
    it('a promise that only rejects', function() {
      let promise = new Promise((resolve, reject) => {
        reject();
      });
      
      promise
        .then(() => assert.ok(false, 'The promise is expected to be rejected.'))
        .catch(() => assert.ok(true));
    });

  });


  describe('an asynchronous promise', function() {
  
    it('that resolves after a while', function(done) {
      let promise = new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
      });
      
      promise
        .then(() => done())
        .catch(() => done(new Error('The promise is expected to resolve.')));
    });
  
    it('a promise that only rejects', function(done) {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(), 100);
      });
      
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });

  });
});
