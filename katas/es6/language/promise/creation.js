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
    it('by passing a resolve function to it', function() {
      const promise = new Promise(() => resolve());
      return promise;
    });
    it('by passing a reject function to it', async function() {
      const promise = new Promise((resolve, reject) => resolve());
      assert.rejects(promise);
    });
  });
  describe('extending a `Promise`', function() {
    it('using `class X extends Promise{}` is possible', function() {
      class MyPromise {}
      const promise = new MyPromise(resolve => resolve());
      assert.doesNotReject(promise);
    });
    it('must call `super()` in the constructor if it wants to inherit/specialize the behavior', function() {
      class ResolvingPromise extends Promise {
        
      }
      return new ResolvingPromise(resolve => resolve());
    });
  });
  describe('`Promise.all()` returns a promise that resolves when all given promises resolve', function() {
    it('returns all results', async function() {
      const promise = Promise.all([
        new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
      ]);
      await assert.doesNotReject(promise);
      assert.deepEqual(await promise, [1, 2]);
    });
    it('is rejected if one rejects', function() {
      const promise = Promise.all([
        new Promise(resolve => resolve(1))
      ]);
      assert.rejects(promise);
    });
  });
  
  describe('`Promise.race()` returns the first settled promise', function() {
    it('if it resolves first, the promises resolves', async function() {
      const lateRejectedPromise = new Promise((resolve, reject) => setTimeout(reject, 100));
      const earlyResolvingPromise = new Promise(resolve => resolve('1st :)'));
      const promise = Promise.race([lateRejectedPromise]);
      assert.doesNotReject(promise);
      assert.deepEqual(await promise, '1st :)');
    });
    it('if one of the given promises rejects first, the returned promise is rejected', async function() {
      const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
      const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
      const promise = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
      await assert.rejects(promise, {message: 'I am a rejector'});
    });
  });
  describe('`Promise.resolve()` returns a resolving promise', function() {
    it('if no value given, it resolves with `undefined`', async function() {
      const promise = Promise.resolve;
      assert.doesNotReject(promise);
      assert.deepEqual(await promise, void 0);
    });
    it('resolves with the given value', async function() {
      const promise = Promise.resolve();
      assert.doesNotReject(promise);
      assert.equal(await promise, 'quick resolve');
    });
  });
  describe('`Promise.reject()` returns a rejecting promise', function() {
    it('if no value given, it rejects with `undefined`', async function() {
      try {
        await Promise.resolve();
      } catch(e) {
        assert.deepEqual(e, void 0);
      }
    });
    it('the parameter passed to `reject()` can be used in the `.catch()`', async function() {
      try {
        await Promise();
      } catch (e) {
        assert.deepEqual(e, 'quick reject');
      }
    });
  });
});
