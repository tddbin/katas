// 71: String - `repeat()` 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`str.repeat(x)` appends `x` copies of `str` to each other and returns it', function() {

  describe('pass the count to `str.repeat(count)`', function() {
    it('for `1` the string stays the same', function() {
      assert.equal('one'.repeat(1), 'one');
    });
    it('for `3` the string `x` becomes `xxx`', function() {
      assert.equal('x'.repeat(3), 'xxx');
    });
    it('for `0` an empty string is returned', function() {
      assert.equal('shrink'.repeat(0), '');
    });
    
    it('the count is not an int, such as "3", it gets coerced to an int', function() {
      assert.equal('three'.repeat('3'), 'threethreethree');
    });
  });

  describe('throws an error for', function() {
    it('a count of <0', function() {
      assert.throws(() => { ''.repeat(-1); }, RangeError);
    });
    it('a count of +Infinty', function() {
      assert.throws(() => { ''.repeat(+Infinity); }, RangeError);
    });
  });
  
  describe('accepts everything that can be coerced to a string', function() {
    it('e.g. a boolean', function() {
      assert.equal(String.prototype.repeat.call(false, 2), 'falsefalse');
    });
    it('e.g. a number', function() {
      assert.equal(String.prototype.repeat.call(1, 2), '11');
    });
  });

  describe('for my own (string) class', function() {
    it('calls `toString()` to make it a string', function() {
      class MyString { toString() { return 'my string'; } }
      assert.equal(String(new MyString()).repeat(1), 'my string');
    });
    it('`toString()` is only called once', function() {
      let counter = 1;
      class X {
        toString() {
          return counter++;
        }
      }
      
      assert.equal(String.prototype.repeat.call(new X(), 2), '11');
    });
  });
  
});
