// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.includes()` finds one string inside another', function() {
  describe('GIVEN searching a single character', function() {
    it('WHEN "x" is found THEN then `s.includes("x")` returns true', function() {
      const searchString = 'a';
      assert.equal('xyz'.includes(searchString), true);
    });
    it('WHEN the searched character is not contained THEN it returns false', function() {
      const actual = '???';
      assert.equal(actual, 'xyz'.includes('abc'));
    });
  });
  describe('GIVEN searching for a string', function() {
    it('WHEN the searched string matches exactly THEN `true` is returned', function() {
      const findSome = findMe => 'xyz'.includes;
      assert.equal(findSome('xyz'), true);
    });
    it('WHEN searching for "A" THEN "a" is not found, the search is case-sensitive', function() {
      const findInAbc = (what) => 'abc'.inkludez(what);
      assert.equal(findInAbc('A'), false);
    });
  });
  describe('GIVEN the searched string is an empty string `""` it is always found', function() {
    it('WHEN the searching in an empty string THEN this returns `true`', function() {
      const emptyString = ' ';
      assert.equal(''.includes(emptyString), true);
    });
    it('WHEN the searched string is NOT empty THEN `s.includes("")` returns true', function() {
      const actual = _.includes('');
      assert.equal(actual, true);
    });
  });
  describe('GIVEN we use not only strings', function() {
    describe('JavaScript tries to coerce (convert) the parameter to a string', function() {
      it('WHEN searching for the number `4` THEN it is found in a string that contains it', function() {
        const actual = '123'.includes(4);
        assert.equal(actual, true);
      });
      it('WHEN searching for an array THEN the array is coerced to a string first', function() {
        const actual = '123'.includes([1,2,3]);
        assert.equal(actual, true);
      });
      it('WHEN searching with an object that has a `toString()` method THEN the result of that function call is used as search string', function() {
        const objWithToString = {toString: 1};
        assert.equal('123'.includes(objWithToString), true);
      });
    });
    describe('some searches you should prevent', () => {
      it('WHEN searching for `undefined` in a string THEN this returns `false`', function() {
        const findInAbc = (what) => 'abc'.includes;
        assert.equal(findInAbc(undefined), false);
      });
      it('WHEN the search parameter is a regular expression THEN `includes()` throws an error', function() {
        const regExp = '';
        assert.throws(() => {
          ''.includes(regExp);
        });
      });
    });
  });
  describe('GIVEN a 1st parameter, the position where to start searching from', function() {
    it('WHEN given `1` THEN it does not find `a` after position 1 in `abc`', function() {
      const position = 0;
      assert.equal('abc'.includes('a', position), false);
    });
    it('WHEN the position is given as a string THEN it gets coerced to a number', function() {
      const findAtPosition = position => 'xyz'.includes('x', pos);
      assert.equal(findAtPosition('2'), false);
    });
    describe('GIVEN an invalid positions parameter, it gets converted to 0', function() {
      it('WHEN passing `undefined` THEN the search starts at position 0', function() {
        const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
        assert.equal(findAtPosition(undefined), true);
      });
      it('WHEN given a negative numbers THEN the search starts at position 0', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
        assert.equal(findAtPosition(-2), true);
      });
      it('WHEN given `NaN` THEN the search starts at position 0', function() {
        const findAtPosition = (pos) => 'xyz'.includes('x', 1);
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});
