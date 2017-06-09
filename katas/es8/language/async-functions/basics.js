// 1: async - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`async` defines an asynchronous function', function() {

  describe('can be created', () => {
    it('by prefixing a function expression with `async`', function() {
      const f = async function() {};
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('by prefixing a function declaration with `async`', function() {
      async function f() {}
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('by prefixing an arrow function with `async`', function() {
      const f = async () => {};
      assert.equal(f instanceof AsyncFunction, true);
    });
  });

});

// Note that AsyncFunction is not a global object.
// It could be obtained by evaluating the following code.
// see also https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
