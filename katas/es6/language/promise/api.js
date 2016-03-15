// 78: Promise - API overview
// To do: make all tests pass, leave the assert lines unchanged!

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
    it('using the constructor parameter', (done) => {
      const promise = new Promise((reject) => { reject(); });
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
    it('via `Promise.reject()`', (done) => {
      const promise = Promise.resolve();
      promise
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done());
    });
  });

  const resolvingPromise = Promise.resolve();
  const rejectingPromise = Promise.reject();

  describe('`Promise.all()`', () => {
    it('`Promise.all([p1, p2])` resolves when all promises resolve', () =>
      Promise.all([resolvingPromise, rejectingPromise, resolvingPromise])
    );
    it('`Promise.all([p1, p2])` rejects when a promise is rejected', (done) => {
      Promise.all([resolvingPromise])
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
  });

  describe('`Promise.race()`', () => {
    it('`Promise.race([p1, p2])` resolves when one of the promises resolves', () =>
      Promise.race([rejectingPromise])
    );
    it('`Promise.race([p1, p2])` rejects when one of the promises rejects', (done) => {
      Promise.race([resolvingPromise])
        .then(() => done(new Error('The promise is expected to be rejected.')))
        .catch(() => done())
    });
    it('`Promise.race([p1, p2])` order matters (and timing)', () =>
      Promise.race([rejectingPromise, resolvingPromise])
    );
  });

});
