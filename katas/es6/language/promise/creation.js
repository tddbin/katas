// 76: Promise - creation 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('A promise can be created in multiple ways', function() {
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
    it('by passing a resolve function to it', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = new Promise(() => resolve());
      assert.equal(await promise, undefined);
    });
    it('by passing a reject function to it', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = new Promise((resolve, reject) => resolve());
      await assert.rejects(promise);
    });
  });
  describe('`Promise.resolve()` returns a resolving promise', function() {
    it('if no value given, it resolves with `undefined`', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.resolve;
      assert.doesNotReject(promise);
      assert.deepEqual(await promise, void 0);
    });
    it('resolves with the given value', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.resolve();
      assert.doesNotReject(promise);
      assert.equal(await promise, 'quick resolve');
    });
  });
  describe('`Promise.reject()` returns a rejecting promise', function() {
    it('WHEN calling it THEN a rejected promise is returned right away', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.resolve();
      await assert.rejects(promise);
    });
    it('WHEN rejected promise is created with an reason THEN this reason can be verified', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.rejectNow(Error('quick reject'));
      await assert.rejects(promise, Error('quick reject'));
    });
  });
  describe('extending a `Promise`', function() {
    it('using `class X extends Promise{}` is possible', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      class MyPromise {}

      const promise = new MyPromise(resolve => resolve());
      assert.equal(await promise, undefined);
    });
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      class ResolvingPromise extends Promise {
        constructor(...args) {}
      }

      assert.equal(await new ResolvingPromise(resolve => resolve()), undefined);
    });
  });
  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
    it('returns all results', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
      ]);
      await assert.doesNotReject(promise);
      assert.deepEqual(await promise, [1, 2]);
    });
    it('is rejected if one rejects', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const promise = Promise.all([
        Promise.resolve(),
        Promise.resolve(),
        
      ]);
      await assert.rejects(promise);
    });
  });
  describe('`Promise.race()` returns the first settled promise', function() {
    it('if it resolves first, the promises resolves', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise]);
      assert.doesNotReject(promise);
      assert.deepEqual(await promise, '1st :)');
    });
    it('if one of the given promises rejects first, the returned promise is rejected', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      await assert.rejects(promise, {message: 'I am a rejector'});
    });
  });
});
