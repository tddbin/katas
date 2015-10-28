// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!

describe('a promise can be created in multiple ways', function() {

  describe('creating a promise fails when', function() {
    
    it('using `Promise` as a function', function() {
      function callPromiseAsFunction() { 
        Promise;
      }
      assert.throws(callPromiseAsFunction);
    });
    
    it('no parameter is passed', function() {
      function promiseWithoutParams() {
        new Promise(() => {});
      }
      assert.throws(promiseWithoutParams);  
    });
    
    it('passing a non-callable throws too', function() {
      const notAFunction = () => {};
      assert.throws(() => { new Promise(notAFunction); });
    });
    
  });
  
  describe('most commonly Promises get created using the constructor', function() {

    it('by passing a resolve function to it', function() {
      const promise = new Promise(() => resolve());
      return promise;
    });

    it('by passing a resolve and a reject function to it', function(done) {
      const promise = new Promise((resolve, reject) => resolve());
      
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(done);
    });
    
  });
  
  describe('extending a `Promise`', function() {
    
    it('using `class X extends Promise{}` is possible', function() {
      class MyPromise {}
      const promise = new MyPromise(resolve => resolve());
      
      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {}
      
      return new ResolvingPromise();
    });
    
  });
  
  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
    
    it('returns all results', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),
        new Promise(resolve => resolve(2)),
        new Promise(resolve => resolve(3))
      ]);
      
      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error(e)));
    });
    
    it('is rejected if one rejects', function(done) {
      const promise = Promise.all([
        new Promise(resolve => resolve(1))
      ]);
      
      promise
        .then(() => done(new NotRejectedError()))
        .catch(() => done());
    });
    
  });
  
  describe('`Promise.race()` returns the first settled promise', function() {
    
    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise]);
      
      promise
        .then(value => { assert.deepEqual(value, '1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('if one of the given promises rejects first, the returned promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.equal(value, 'I am a rejector'); done(); })
        .catch(done);
    });
    
  });

  describe('`Promise.resolve()` returns a resolving promise', function() {

    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = Promise.resolve;
      
      promise
        .then(value => { assert.deepEqual(value, void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('resolves with the given value', function(done) {
      const promise = Promise.resolve();
      
      promise
        .then(value => { assert.equal(value, 'quick resolve'); done(); })
        .catch(e => done(e));
    });
    
  });
  
  describe('`Promise.reject()` returns a rejecting promise', function() {

    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = Promise.resolve();
      
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, void 0); done(); })
        .catch(done);
    });

    it('the parameter passed to `reject()` can be used in the `.catch()`', function(done) {
      const promise = Promise;
      
      promise
        .then(() => done(new NotRejectedError()))
        .catch(value => { assert.deepEqual(value, 'quick reject'); done(); })
        .catch(done);
    });
    
  });
  
});

class NotRejectedError extends Error {
  constructor() {
    super();
    this.message = 'Expected promise to be rejected.';
  }
}
