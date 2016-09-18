// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {

  it('it is a static method', function() {
    const expectedType = '???';
    assert.equal(typeof Reflect.apply, expectedType)
  });

  describe('the 1st parameter', () => {
    it('is a callable, e.g. a function', () => {
      let fn;
      assert.equal(Reflect.apply(fn, void 0, []), 42);
    });
    it('passing it a non-callable throws a TypeError', function() {
      let applyOnUncallable = () => {
        Reflect.apply(Array);
      };
      assert.throws(applyOnUncallable, TypeError);
    });
  });
  describe('the 2nd parameter', () => {
    it('is the scope (or the `this`)', function() {
      class FourtyTwo {
        constructor() { this.value = 42}
        fn() {return this.value}
      }
      let instance = new FourtyTwo();
      const fourtyTwo = Reflect.apply(instance.fn);
      assert.deepEqual(fourtyTwo, 42);
    });
  });

  describe('the 3rd parameter', () => {
    it('must be an array (or array-like)', () => {
      const thirdParam = 'should be array-like';
      assert.doesNotThrow(() => Reflect.apply(() => void 0, null, thirdParam));
    });
    it('is an array of parameters passed to the call', function() {
      let emptyArrayWithFiveElements = Reflect.apply(Array);
      assert.deepEqual(emptyArrayWithFiveElements.fill(42), [42, 42, 42, 42, 42]);
    });
  });

  describe('example usages', () => {
    it('simple function call', () => {
      const fn = () => ':(';
      assert.equal(Reflect.apply(fn, void 0, []), 'the return value');
    });
    it('call a function on an array', () => {
      const fn = [].join;
      assert.deepEqual(Reflect.apply(fn, [0, 23, 42], [1]), [23, 42]);
    });
    it('pass in the `this` that the function to call needs', () => {
      class Bob {
        constructor() { this._name = 'Bob'; }
        name() { return this._name; }
      }
      const bob = new Bob();
      const scope = Bob;
      assert.equal(Reflect.apply(bob.name, scope, []), 'Bob');
    });
  });

});
