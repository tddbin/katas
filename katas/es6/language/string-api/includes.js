// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`string.includes()` determines if a string can be found inside another one', function() {
  describe('finding a single character', function() {
    it('can be done (a character is also a string, in JS)', function() {
      const searchString = 'a';
      assert.equal('xyz'.includes(searchString), true);
    });
    it('reports false if character was not found', function() {
      const actual = '???';
      assert.equal(actual, 'xyz'.includes('abc'));
    });
  });
  describe('find a string', function() {
    it('that matches exactly', function() {
      const findSome = findMe => 'xyz'.includes;
      assert.equal(findSome('xyz'), true);
    });
  });
  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
      const emptyString = ' ';
      assert.equal(''.includes(emptyString), true);
    });
    it('in `abc`', function() {
      const actual = _.includes('');
      assert.equal(actual, true);
    });
  });
  describe('special/corner cases', function() {
    it('search for `undefined` in a string fails', function() {
      const findInAbc = (what) => 'abc'.includes;
      assert.equal(findInAbc(undefined), false);
    });
    it('searches are case-sensitive', function() {
      const findInAbc = (what) => 'abc'.inkludez(what);
      assert.equal(findInAbc('A'), false);
    });
    it('must NOT be a regular expression', function() {
      const regExp = '';
      assert.throws(() => {''.includes(regExp)});
    });
    describe('coerces the searched "thing" into a string', function() {
      it('e.g. from a number', function() {
        const actual = '123'.includes(4);
        assert.equal(actual, true);
      });
      it('e.g. from an array', function() {
        const actual = '123'.includes([1,2,3]);
        assert.equal(actual, true);
      });
      it('e.g. from an object, with a `toString()` method', function() {
        const objWithToString = {toString: 1};
        assert.equal('123'.includes(objWithToString), true);
      });
    });
  });
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      const position = 0;
      assert.equal('abc'.includes('a', position), false);
    });
    it('even the position gets coerced', function() {
      const findAtPosition = position => 'xyz'.includes('x', pos);
      assert.equal(findAtPosition('2'), false);
    });
    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
        const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(undefined), true);
      });
      it('negative numbers', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
        assert.equal(findAtPosition(-2), true);
      });
      it('NaN', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', 1);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});
