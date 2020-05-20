// ES7 - 1: Array - includes
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.includes()` determines whether an array includes a certain value', () => {
  it('`includes()` method is defined on the prototype', () => {
    const fn = [].includes;
    assert.equal(typeof fn, 'function');
  });
  describe('GIVEN we search simple values', () => {
    it('WHEN searching an empty list THEN always return false', () => {
      //// const emptyArray = [undefined, null, false, 0];
      const emptyArray = [];
      assert.equal(emptyArray.includes(undefined), false);
      assert.equal(emptyArray.includes(null), false);
      assert.equal(emptyArray.includes(false), false);
      assert.equal(emptyArray.includes(0), false);
    });
    it('WHEN searching for +0 or -0 THEN they are equal', () => {
      assert.equal([-0].includes(+0), true);
    });
    it('WHEN searching for a number THEN they are compared by value (not type)', () => {
      assert.equal([1.0000].includes(1), true);
      assert.equal([42e10].includes(420000000000.000), true);
    });
    it('WHEN searching for a boolean THEN works as expected', () => {
      assert.equal([1, 0, 2].includes(true), false);
      assert.equal([1, 0, 2, true].includes(true), true);
    });
  });
  describe('GIVEN we search (more) complex values', () => {
    it('WHEN searching for `NaN` THEN it finds it (as opposed to `indexOf()`)', () => {
      //// const found = [NaN].indexOf(NaN);
      const found = [NaN].includes(NaN);
      assert.equal(found, true);
    });
    it('WHEN the array has holes THEN they are seen as `undefined` (not so by `indexOf()`)', () => {
      //// const arr = ['zero', 'one'];
      const arr = [];
      arr[2] = 'two';
      assert.equal(arr.includes(undefined), true);
    });
    describe('types must always match, for example', () => {
      it('WHEN searching a numeric string THEN types must match', () => {
        assert.equal(['1'].includes('1'), true);
      });
      it('WHEN searching a number THEN types must match', () => {
        assert.equal([1].includes(1), true);
      });
    });
    it('WHEN searching for an object THEN the same object (not just the same content) must be given', () => {
      const obj = {};
      assert.equal([{}].includes(obj), false);
      assert.equal([obj].includes(obj), true);
    });
    it('WHEN searching for a Symbol THEN only the same symbol is found', () => {
      //// const symbol = Symbol('oha');
      const symbol = Symbol.for('oha');
      assert.equal([symbol].includes(Symbol.for('oha')), true);
    });
  });
  describe('the `fromIndex` parameter, GIVEN we start the search at a certain position in the array', () => {
    it('WHEN searching from 3rd position THEN find only everything beyond', () => {
      const fromIndex = 3;
      assert.equal(['zero', 'one', 'two', 'three'].includes('three', fromIndex), true);
    });
    it('WHEN searching at index beyond the array`s end THEN find nothing', () => {
      assert.equal([42, 23].includes(23, 10), false);
    });
    describe('WHEN searching at a negative index', () => {
      it('THEN use it as index from the end', () => {
        //// const fromIndex = 0;
        const fromIndex = -2;
        assert.equal([1, 2, 42, 23].includes(1, fromIndex), false);
        assert.equal([1, 2, 42, 23].includes(42, fromIndex), true);
      });
      it('THEN use it as index from the end', () => {
        assert.equal([1, 2, 42, 23].includes(42, -100), true);
      });
    });
  });
});
