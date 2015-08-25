// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {

  const s = 'the string s';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      assert.equal(s.startsWith('t'), true);
    });
    it('works with a string', function() {
      assert.equal(s.startsWith('the'), true);
    });
    it('works with unicodes', function() {
      const nuclear = '\u26222';
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      assert.throws(() => {''.startsWith(/the/)}, TypeError);
    });
  });

  describe('2nd parameter, the position where to start searching from', function() {
    it('find "str" at position 4', function() {
      assert.equal(s.startsWith('str', 4), true);
    });
    it('`undefined` is the same as 0', function() {
      assert.equal(s.startsWith('the', undefined), true);
    });
    it('the parameter gets coerced to an int', function() {
      assert.equal(s.startsWith('str', '4'), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      assert.equal(s.startsWith(' ', s.length + 1), false);
    });
  });
  
  describe('tranfer the functionality to other objects', function() {
    const startsWith = (...args) => String.prototype.startsWith.call(...args);
    it('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(startsWith(aBool, 'tr'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 1994;
      assert.equal(startsWith(aNumber, '19'), true);
    });
  });
  
});
