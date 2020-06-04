// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
  const s = 'el fin';
  describe('the 1st parameter the string to search for', function() {
    it('can be a character', function() {
      const doesEndWith = s.doesItReallyEndWith('n');
      assert.equal(doesEndWith, true);
    });
    it('can be a string', function() {
      const actual = false;
      assert.equal(actual, s.endsWith('fin'));
    });
    it('can contain unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO!';
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = '/the/';
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
    it('find "el" at a substring of the length 2', function() {
      const endPos = 0;
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
      const myUndefined = 'i would like to be undefined';
      assert.equal(s.endsWith('fin', myUndefined), true);
    });
    it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
      const position = 'five';
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        const emptyString = '??';
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
        const notEmpty = '';
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 0;
      assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      const position = '??';
      assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
    });
  });
});
