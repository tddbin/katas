// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`.', function() {

  const s = 'el fin';

  describe('1st parameter, the string to search for', function() {
    it('works with just a character', function() {
      const doesEndWith = s.doesItReallyEndWith('n');
      assert.equal(doesEndWith, true);
    });
    it('works with a string', function() {
      const expected = false;
      assert.equal(s.endsWith('fin'), expected);
    });
    it('works with unicode characters', function() {
      const nuclear = 'NO ☢ Oh NO!';
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      const aRegExp = '/the/';
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });

  describe('2nd parameter, searches within this string as if this string were only this long', function() {
    it('find "el" at a substring of the length 2', function() {
      const endPos = 0;
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
      const _undefined_ = 'i would like to be undefined';
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an int', function() {
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
  
  describe('transfer the functionality to other objects', function() {
    
    const endsWith = (...args) => String.prototype.endsWith.call(...args);
    
    it('e.g. a boolean', function() {
      let aBool = false;
      assert.equal(endsWith(!aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
      let aNumber = 0;
      assert.equal(endsWith(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
      const position = '??';
      assert.equal(endsWith(1994, '99', position), true);
    });
  });
  
});
