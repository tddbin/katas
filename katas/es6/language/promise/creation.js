// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!

describe('a promise can be created in multiple ways', function() {

  it('using `Promise` as a function throws', function() {
    assert.throws(() => { Promise() });
  });

  describe('extending a `Promise`', function() {
    it('is possible', function() {
      class MyPromise extends Promise {}
      const promise = new MyPromise(resolve => resolve());
      
      promise
        .then(() => done())
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      // WARNING: this example doesn't fulfill the Liskov principle
      class ResolvingPromise extends Promise {
        constructor() {
          super(resolve => resolve());
        }
      }
      
      return new ResolvingPromise();
    });
  });

  describe('through the constructor', function() {

    describe('it throws an error', function() {
      
      it('when no parameter is passed', function() {
        assert.throws(() => new Promise());  
      });
      
      it('passing a non-callable throws too', function() {
        const notAFunction = 1;
        assert.throws(() => { new Promise(notAFunction); });
      });
      
    });
    
  });
  
  describe('Promise.all', function() {
    it('returns a promise that resolves when all given promises resolve', function(done) {
      const promise = Promise.all([new Promise(resolve => resolve(1)), new Promise(resolve => resolve(2))]);
      
      promise
        .then(value => { assert.deepEqual(value, [1, 2]); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
  });
  
  describe('`Promise.race()` returns the first settled promise', function() {
    
    it('if it resolves first, the promises resolves', function(done) {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise, earlyResolvingPromise]);
      
      promise
        .then(value => { assert.deepEqual(value, '1st :)'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('if one of the given promises rejects first, the new promise is rejected', function(done) {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a rejector'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(value => { assert.deepEqual(value, 'I am a rejector'); done(); });
    });
    
  });

  describe('`Promise.resolve()` returns a resolving promise', function() {

    it('if no value given, it resolves with `undefined`', function(done) {
      const promise = Promise.resolve();
      
      promise
        .then(value => { assert.deepEqual(value, void 0); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });

    it('resolves with the given value', function(done) {
      const promise = Promise.resolve('quick resolve');
      
      promise
        .then(value => { assert.deepEqual(value, 'quick resolve'); done(); })
        .catch(e => done(new Error('Expected to resolve, but failed with: ' + e)));
    });
    
  });
  
  describe('`Promise.reject()` returns a rejecting promise', function() {

    it('if no value given, it rejects with `undefined`', function(done) {
      const promise = Promise.reject();
      
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(() => done());
    });

    it('rejects only', function(done) {
      const promise = Promise.reject('quick reject');
      
      promise
        .then(() => done(new Error('Expected promise to be rejected.')))
        .catch(() => done());
    });
    
  });
});