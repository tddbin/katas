// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`string.includes()` finds string within another string', function() {

  describe('find a single character', function() {
    it('in a three char string', function() {
      assert.equal('xyz'.includes('z'), true);
    });
    it('reports false if character was not found', function() {
      assert.equal('xyz'.includes('abc'), false);
    });
  });
  
  describe('find a string', function() {
    it('that matches exactly', function() {
      assert.equal('xyz'.includes('xyz'), true);
    });
  });
  
  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
      assert.equal(''.includes(''), true);
    });
    it('in `abc`', function() {
      assert.equal('abc'.includes(''), true);
    });
  });

  describe('special/corner cases', function() {
    it('search for `undefined` in a string fails', function() {
      assert.equal('abc'.includes(void 0), false);
    });
    it('searches case-sensitive', function() {
      assert.equal('abc'.includes('A'), false);
    });
    describe('coerces the searched "thing" into a string', function() {
      it('e.g. from a number', function() {
        assert.equal('123'.includes(1), true);
      });
      it('e.g. from an array', function() {
        assert.equal('123'.includes([1]), true);
      });
      it('e.g. from an object, with a `toString()` method', function() {
        assert.equal('123'.includes({toString: () => 1}), true);
      });
    });
  });
  
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      assert.equal('abc'.includes('a', 1), false);
    });
    it('even the position gets coerced', function() {
      assert.equal('xyz'.includes('z', '2'), true);
    });
  });

});
