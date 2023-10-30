// 75: Promise - basics 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

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
    it('resolve a promise by calling the `resolve` function given as first parameter', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      let promise = new Promise((resolve) => {
        
      });
      await assert.doesNotReject(promise);
    });
    it('the `resolve` function can return a value, that is consumed by the `promise.then()` callback', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      let promise = new Promise((resolve) => {
        resolve();
      });
      await assert.doesNotReject(promise);
      assert.equal(await promise, 42);
    });
    it('rejecting a promise is done by calling the callback given as 2nd parameter', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      let promise = new Promise((reject) => {
        reject();
      });
      await assert.rejects(promise);
    });
  });
  describe('an asynchronous promise', function() {
    it('can resolve later, also by calling the first callback', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      let promise = new Promise(() => {
        setTimeout(() => resolve(), 100);
      });
      await assert.doesNotReject(promise);
    });
    it('reject it at some later point in time, calling the 2nd callback', async function() {
      //: {"jskatas": {"runnerOptions": {"topLevelAwait": true}}}
      let promise = new Promise((reject) => {
        setTimeout(() => reject(), 100);
      });
      await assert.rejects(promise);
    });
  });
});
