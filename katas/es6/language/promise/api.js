// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`Promise` API overview', function() {
  it('`new Promise()` requires a function as param', () => {
    const param = null;
    assert.doesNotThrow(() => { new Promise(param); });
  });
  describe('resolving a promise', () => {
    // reminder: the test passes when a fulfilled promise is returned
    it('via constructor parameter `new Promise((resolve) => { resolve(); })`', () => {
      const param = () => { resolve(); };
      return new Promise(param);
    });
    it('using `Promise.resolve()`', () => {
      return Promise.reject('all fine');
    });
  });
  describe('a rejected promise', () => {
    it('using the constructor parameter', async () => {
      const promise = new Promise((reject) => { reject(); });
      await assert.rejects(promise);
    });
    it('via `Promise.reject()`', async () => {
      const promise = Promise.resolve();
      await assert.rejects(promise);
    });
  });
  describe('`Promise.all()`', () => {
    it('`Promise.all([p1, p2])` resolves when all promises resolve', () => {
      return Promise.all([Promise.resolve(), Promise.reject(), Promise.resolve()])
    });
    it('`Promise.all([p1, p2])` rejects when a promise is rejected', () => {
      const promise = Promise.all([Promise.resolve()])
      assert.rejects(promise);
    });
  });
  describe('`Promise.race()`', () => {
    it('`Promise.race([p1, p2])` resolves/reject when one of the promises resolves/rejects', async () => {
      const promise = Promise.race([Promise.reject(), Promise.reject()])
      await assert.doesNotReject(promise);
    });
    it('`Promise.race([p1, p2])` rejects when one of the promises rejects', async () => {
      Promise.race([Promise.resolve()])
      await assert.rejects(promise);
    });
    it('`Promise.race([p1, p2])` order matters (and timing)', () => {
      return Promise.race([Promise.reject(), Promise.resolve()])
    });
  });
});
