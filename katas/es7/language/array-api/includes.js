// ES7 - 1: Array - includes
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.includes()` determines whether an array includes a certain value', () => {
  it('`includes()` method is defined on the prototype', () => {
    //// const fn = Array.includes;
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
      //// const numbers = [-1];
      const numbers = [-0];
      assert.equal(numbers.includes(+0), true);
    });
    it('WHEN searching for a number THEN they are compared by value (not type)', () => {
      //// const one = 1.00001;
      const one = 1.0000;
      assert.equal([one].includes(1), true);

      //// const fourtyTwoALot = 42e9;
      const fourtyTwoALot = 42e10;
      assert.equal([fourtyTwoALot].includes(420000000000.000), true);
    });
    it('WHEN searching for a boolean THEN works as expected', () => {
      //// const noBooleans = [1, 0, 2, true];
      const noBooleans = [1, 0, 2];
      assert.equal(noBooleans.includes(true), false);

      //// const containsOneBoolean = [1, 0, 2];
      const containsOneBoolean = [1, 0, 2, true];
      assert.equal(containsOneBoolean.includes(true), true);
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
        //// const searchFor = 1;
        const searchFor = '1';
        assert.equal(['1'].includes(searchFor), true);
      });
      it('WHEN searching a number THEN types must match', () => {
        //// const searchFor = '1';
        const searchFor = 1;
        assert.equal([1].includes(searchFor), true);
      });
    });
    it('WHEN searching for an object THEN the same object (not just the same content) must be given', () => {
      const obj = {};
      //// const searchFor = {};
      const searchFor = obj;
      assert.equal([obj].includes(searchFor), true);
    });
    it('WHEN searching for a Symbol THEN only the same symbol is found', () => {
      //// const symbol = Symbol('oha');
      const symbol = Symbol.for('oha');
      assert.equal([symbol].includes(Symbol.for('oha')), true);
    });
  });
  describe('the `fromIndex` parameter, GIVEN we start the search at a certain position in the array', () => {
    it('WHEN searching from 3rd position THEN find only everything beyond', () => {
      //// const fromIndex = 5;
      const fromIndex = 3;
      assert.equal(['zero', 'one', 'two', 'three'].includes('three', fromIndex), true);
    });
    it('WHEN searching at index beyond the array`s end THEN find nothing', () => {
      //// const fromIndex = 0;
      const fromIndex = 10;
      assert.equal([42, 23].includes(23, fromIndex), false);
    });
    describe('WHEN searching at a negative index', () => {
      it('THEN use it as index from the end', () => {
        //// const fromIndex = 0;
        const fromIndex = -2;
        assert.equal([1, 2, 42, 23].includes(1, fromIndex), false);
        assert.equal([1, 2, 42, 23].includes(42, fromIndex), true);
      });
      it('THEN use it as index from the end', () => {
        //// const fromIndex = 100;
        const fromIndex = -100;
        assert.equal([1, 2, 42, 23].includes(42, fromIndex), true);
      });
    });
  });
});
