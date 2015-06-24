// 55: Number - isInteger
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Number.isInteger()` determines if a value is an integer', function(){

  const isTrue = (what) => assert.equal(what, true);
  const isFalse = (what) => assert.equal(what, false);

  it('`isInteger` is a static function on `Number`', function() {
    assert.equal(typeof Number.isInteger, 'function');
  });

  describe('zero in different ways', function() {
    it('0 is an integer', function() {
      isTrue(Number.isInteger(0));
    });
    it('0.0', function() {
      isTrue(Number.isInteger(0.000));
    });
    it('the string "0" is NOT an integer', function() {
      isFalse(Number.isInteger('0'));
    });
  });

  describe('one in different ways', function() {
    it('`Number(1)` is an integer', function() {
      isTrue(Number.isInteger(Number(1)));
    });
    it('0.111 + 0.889', function() {
      isTrue(Number.isInteger(0.111 + 0.889));
    });
    it('0.1+0.9 = 1', function() {
      isFalse(Number.isInteger(0.5 + 0.2 + 0.2 + 0.1));
    });
    it('parseInt`ed "1" is an integer', function() {
      isTrue(Number.isInteger(Number.parseInt('1')));
    });
  });
  
  describe('what is not an integer', function() {
    it('`{}` is NOT an integer', function() {
      isFalse(Number.isInteger({}));
    });
  
    it('`0.1` is not an integer', function() {
      isFalse(Number.isInteger(0.1));
    });
  
    it('`Number.Infinity` is not an integer', function() {
      isFalse(Number.isInteger(Number.Infinity));
    });
  
    it('NaN', function() {
      isFalse(Number.isInteger(NaN));
    });
  });

});
