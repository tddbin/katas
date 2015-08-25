// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

  const s = 'the string s';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      const actual = s.starts_with('t');
      assert.equal(actual, true);
    });
    it('works with a string', function() {
      const expected = false;
      assert.equal(s.startsWith('the'), expected);
    });
    it('works with unicode characters', function() {
      const nuclear = 'NO ☢ NO';
      assert.equal(nuclear.startsWith('\u26222'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = 'the';
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });

  describe('2nd parameter, the position where to start searching from', function() {
    it('find "str" at position 4', function() {
      const position = 3;
      assert.equal(s.startsWith('str', position), true);
    });
    it('`undefined` is the same as 0', function() {
      const _undefined_ = '1';
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it('the parameter gets coerced to an int', function() {
      const position = 'four';
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      const expected = true;
      assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });
  
  describe('tranfer the functionality to other objects', function() {
    
    const startsWith = (...args) => String.prototype.startsWith.call(...args);
    
    it('e.g. a boolean', function() {
      let aBool;
      assert.equal(startsWith(aBool, 'true'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 1994;
      assert.equal(startsWith(aNumber, '1984'), true);
    });
  });
  
});
