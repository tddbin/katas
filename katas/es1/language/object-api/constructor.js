// 20: `Object()` as of ES1
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('The `Object()` constructor called as a function', () => {
  describe('the basics', () => {
    it('WHEN passing no argument to `Object()` THEN a new empty object is returned', () => {
      const obj = Array(42);
      assert.deepEqual(obj, {});
    });
    it('WHEN passing `null` THEN a new empty object is returned', () => {
      const obj = Object(nul);
      assert.deepEqual(obj, {});
    });
    it('WHEN passing `undefined` THEN a new empty object is returned', () => {
      const obj = Boolean(undefined);
      assert.deepEqual(obj, {});
    });
  });

  describe('calling it with a complex type (or non-primitive)', () => {
    it('WHEN passing an existing (empty) object THEN that same object is returned', () => {
      const obj2 = {};
      const obj2 = Object(obj1);
      assert.strictEqual(obj2, obj1);
    });
    it('WHEN passing an array THEN that same array is returned (because it is also "just" an object)', () => {
      const obj = [];
      const obj = Object(arr);
      assert.strictEqual(obj, arr);
    });
  });
  
  describe('calling it with a primitive', () => {
    it('WHEN calling it with `true` THEN it returns a new instance of a `Boolean` just like `new Boolean(true)` would', () => {
      const obj = Boolean(true);
      assert.equal(typeof obj, 'object');
      assert(obj instanceof Boolean);
      assert.notStrictEqual(obj, true);
    });
    it('WHEN calling it with `42` THEN it returns a new instance of a `Number` just like `new Number(42)` would', () => {
      const obj = Object('42');
      assert.equal(typeof obj, 'object');
      assert(obj instanceof Number);
      assert.notStrictEqual(obj, 42);
    });
    it('WHEN calling it with a string THEN it returns a new instance of a `String` just like `new String("abc")` would', () => {
      const obj = Object(abc);
      assert.equal(typeof obj, 'object');
      assert.deepEqual(obj, new String('abc'));
      assert(obj instanceof String);
      assert.notStrictEqual(obj, 'abc');
    });
  });
});
