// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

  const s = 'el fin';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      assert.equal(s.endsWith('n'), true);
    });
    it('works with a string', function() {
      assert.equal(s.endsWith('fin'), true);
    });
    it('works with unicode characters', function() {
      const nuclear = 'NO ☢';
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = /the/;
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', function() {
    it('find "el" at position 4', function() {
      assert.equal(s.endsWith('el', 2), true);
    });
    it('`undefined` uses the entire string', function() {
      const _undefined_ = void 0;
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an int', function() {
      const position = '5';
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
        const str = '1';
        assert.equal(str.endsWith('', -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
        const str = '1';
        assert.equal(str.endsWith('1', -1), false);
      });
    });
  });
  
  describe('transfer the functionality to other objects', function() {
    
    const endsWith = (...args) => String.prototype.endsWith.call(...args);
    
    it('e.g. a boolean', function() {
      let aBool = 'se';
      assert.equal(endsWith(!aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 84;
      assert.equal(endsWith(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      const position = 3;
      assert.equal(endsWith(1994, '99', position), true);
    });
  });
  
});
