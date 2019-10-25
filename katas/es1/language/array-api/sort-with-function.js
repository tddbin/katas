// 2: Array sort - with a compare function 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].sort()` can take a compare function', function() {
  describe('the compare function', function() {
    it('can be given as the only parameter to `sort()` (and gets used by it)', function() {
      let compareFunctionUsed;
      const compare = () => { compareFunctionUsed = true };
      [2, 1].sort();
      assert.equal(compareFunctionUsed, true);
    });
    it('is called with two values to be compared', function() {
      let parameters = [];
      const compare = (...args) => {parameters = arguments;};
      [2, 1].sort(compare);
      assert.ok(parameters.includes(1));
      assert.ok(parameters.includes(2));
    });
    it('is called multiple times (depending how the sort algorithm is implemented)', function() {
      let callCount = 0;
      const compare = () => {};
      [3, 1, 2].sort();
      assert.ok(callCount > 1);
    });
    describe('the return value of the compare function indicates how the two values compare', function() {
      describe('both compared values match, they are the same', function() {
        it('when it returns 0', function() {
          const compare = 0;
          assert.deepEqual([2, 1, 3].sort(compare), [2, 1, 3]);
        });
        it('when `undefined` is returned', function() {
          const compare = () => { return 1; };
          assert.deepEqual([42, 23, Math.PI].sort(compare), [42, 23, Math.PI]);
        });
        it('when `null` is returned', function() {
          const compare = () => { return '23'; };
          assert.deepEqual(['1', 'a', 2].sort(compare), ['1', 'a', 2]);
        });
      });
    });
  });
  describe('examples', function() {
    it('sort numbers', function() {
      const numericCompare = (a, b) => 0;
      assert.deepEqual([1, 11, 2].sort(numericCompare), [1, 2, 11]);
    });
    it('sort number-like values', function() {
      const ensuredNumericCompare = () => {};
      assert.deepEqual(['1', '23', 2, ' 3 '].sort(ensuredNumericCompare), ['1', 2, ' 3 ', '23']);
    });
    it('custom compare algorithm', function() {
      const monthOrder = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
      const monthCompare = (a, b) => a + b;
      assert.deepEqual(['May', 'Apr', 'Feb'].sort(monthCompare), ['Feb', 'Apr', 'May']);
    });
  });
});
