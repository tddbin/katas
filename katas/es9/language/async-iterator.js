/**
 * - a flow of async fns
 * - fork a flow with the decision taken at runtime, e.g. by passing a value to next()
 * - trigger a new value from the flow e.g. when an error occurred
 * - the last two are kinda 2 way binding, pass values in and throw "out" on demand
 */

describe('Async iterator', () => {

  describe('a sequence with (a)sync functions', () => {
    const asyncFn = async () => 'from asyncFn';
    const syncFn = () => 'from syncFn';
    const slowAsyncFn = () => new Promise((resolve) => {
      setTimeout(() => resolve('from slowAsyncFn'), 100);
    });

    async function* flow() {
      yield asyncFn();
      yield syncFn();
      yield slowAsyncFn();
    }

    it('run the flow via `for await of` loop', async () => {
      const collection = [];
      for await (let step of flow()) {
        collection.push(step);
      }
      assert.deepEqual(collection, ['from asyncFn', 'from syncFn', 'from slowAsyncFn']);
    });
    it('rolled out iterator calls', async () => {
      const collection = [];
      const generator = flow();
      collection.push((await generator.next()).value);
      collection.push((await generator.next()).value);
      collection.push((await generator.next()).value);
      collection.push((await generator.next()).value);

      assert.deepEqual(collection, ['from asyncFn', 'from syncFn', 'from slowAsyncFn', undefined]);
    });
  });

  describe('a flow that forks with the decision taken at runtime', () => {
    it('...', () => {
      const fn1 = () => {};
      // const fn
      // dont know what i really want ...
    });
  });

  describe('trigger an error, or emit a value from inside the flow (an async generator)', () => {
    it('...', () => {
      const fn1 = async () => {};
    });
  });
});