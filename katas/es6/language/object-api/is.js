// 54: Object - is
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Object.is()` determines whether two values are the same', function(){

  describe('scalar values', function() {
    it('1 is the same as 1', function() {
      const areSame = Object.is(1, 1);
      assert.equal(areSame, true);
    });
    it('int 1 is different to string "1"', function() {
      const areSame = Object.is(1, '1');
      assert.equal(areSame, false);
    });
    it('string', function() {
      const areSame = Object.is('one', 'one');
      assert.equal(areSame, true);
    });
    it('+0 is not the same as -0', function() {
      const areSame = false;
      assert.equal(Object.is(+0, -0), areSame);
    });
    it('NaN is the same as NaN', function() {
      const number = NaN;
      assert.equal(Object.is(NaN, number), true);
    });
  });
  
  describe('coersion, as in `==` and `===`, does not apply', function() {
    it('`""` and `false` are not the same', function() {
      const coerced = ("" == false);
      const isSame = !Object.is("", false);
      assert.equal(isSame, coerced);
    });
    it('+0 != -0', function() {
      const coerced = +0 === -0;
      const isSame = !Object.is(+0, -0);
      assert.equal(isSame, coerced);
    });
    it('NaN', function() {
      const coerced = NaN == NaN;
      const isSame = !Object.is(NaN, NaN);
      assert.equal(isSame, coerced);
    });
    it('NaN 0/0', function() {
      const isSame = Object.is(NaN, 0/0);
      assert.equal(isSame, true);
    });
  });
  
  describe('complex values', function() {
    it('`{}` is just not the same as `{}`', function() {
      const areSame = false;
      assert.equal(Object.is({}, {}), areSame);
    });
    it('Map', function() {
      let map1 = new Map([[1, 'one']]);
      let map2 = new Map([[1, 'one']]);
      const areSame = Object.is(map1, map2);
      assert.equal(areSame, false);
    });
  });
  
});
