// 1: async - basics
// To do: make all tests pass, leave the assert lines unchanged!


describe('`async` defines an asynchronous function', function() {
  describe('can be created by putting `async` before', () => {
    it('a function expression', function() {
      const AsyncFunction = async function () {}.constructor;
      const f = function() {};
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('a function declaration', function() {
      const AsyncFunction = async function () {}.constructor;
      function f() {}
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('an arrow function', function() {
      const AsyncFunction = async function () {}.constructor;
      const f = () => {};
      assert.equal(f instanceof AsyncFunction, true);
    });
    it('an object method', function() {
      const AsyncFunction = async function () {}.constructor;
      const obj = {f: () => void 0};
      assert.equal(obj.f instanceof AsyncFunction, true);
    });
  });

  describe('the return value', () => {
    it('is always a Promise', function() {
      const f = 'nö';
      assert.equal(f() instanceof Promise, true);
    });
    it('wraps the return value in a Promise', function() {
      const f = () => 42;
      return f().then(v => assert.equal(v, 42));
    });
    it('is a rejected Promise when the async function throws', function() {
      const f = async () => 0;
      return f()
        .then(() => assert(false, 'Promise must reject (not pass)!'))
        .catch(v => assert.equal(v, 23))
      ;
    });
  });

});
