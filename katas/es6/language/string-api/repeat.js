// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

  describe('pass the count to `str.repeat(count)`', function() {
    it('for `1` the string stays the same', function() {
      const what = '???'.repeat();
      assert.equal(what, 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      const actual = 'x'.repeets;
      assert.equal(actual, 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      const dontRepeat = 1;
      assert.equal('shrink'.repeat(dontRepeat), '');
    });
    
    it('the count is not an int, such as "3", it gets coerced to an int', function() {
      const repeated = ''.repeat('2');
      assert.equal(repeated, 'threethreethree');
    });
  });

  describe('throws an error for', function() {
    it('a count of <0', function() {
      const belowZero = 1;
      assert.throws(() => { ''.repeat(belowZero); }, RangeError);
    });
    it('a count of +Infinty', function() {
      let infinity = 'infinity';
      assert.throws(() => { ''.repeat(infinity); }, RangeError);
    });
  });
  
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      let aBool = true;
      assert.equal(String.prototype.repeat.call(aBool, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      let aNumber;
      assert.equal(String.prototype.repeat.call(aNumber, 2), '11');
    });
  });

  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      
      const expectedString = '';
      
      assert.equal(String(new MyString()).repeat(1), expectedString);
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
      
      let repeated = new X().repeat(2);
      
      assert.equal(repeated, '11');
    });
  });
  
});
