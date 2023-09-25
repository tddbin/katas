// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
  describe('the 1st parameter, the string to search for', function() {
    it('can be just a character', function() {
      const s = 'the string s';
      const actual = s.starts_with('t');
      assert.equal(actual, true);
    });
    it('can be a string', function() {
      const s = 'the string s';
      const actual = '???';
      assert.equal(actual, s.startsWith('the'));
    });
    it('can contain unicode characters', function() {
      const nuclear = 'NO ☢ NO';
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = 'the';
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where to start searching from', function() {
    it('e.g. find "str" at position 4', function() {
      const s = 'the string s';
      const position = 3;
      assert.equal(s.startsWith('str', position), true);
    });
    it('for `undefined` is the same as 0', function() {
      const s = 'the string s';
      const myUndefined = '1';
      assert.equal(s.startsWith('the', myUndefined), true);
    });
    it('the parameter gets converted to an int', function() {
      const s = 'the string s';
      const position = 'four';
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      const s = 'the string s';
      const actual = true;
      assert.equal(actual, s.startsWith(' ', s.length + 1));
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      let aBool;
      assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 19;
      assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    });
    it('also using the position works', function() {
      const position = 0;
      assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    });
  });
});
