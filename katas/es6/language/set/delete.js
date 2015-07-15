// ??: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!

describe('`set.delete()` deletes an element from a set', function(){

  let set;
  beforeEach(() => set = new Set());

  describe('when an existing element gets removed', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it('returns `true`', function() {
      const returns = set.delete('two');
      assert.equal(returns, true);
    });
    it('the size decreases', function() {
      set.delete('two');
      assert.equal(set.size, 2);
    });
  });
  
  describe('if nothing was deleted (no element with the given value was found)', function() {
    it('returns `false`', function() {
      const returns = set.delete('fourty-two');
      
      assert.equal(returns, false);
    });
  });
  
  describe('`undefined` is a valid value in a set', function() {
    it('deleting it, when it is not in the set, returns `false` too', function() {
      const returns = set.delete();
      assert.equal(returns, false);
    });
    
    it('`delete()` removes it, when its in the set', function() {
      set.add(void 0);
      const returns = set.delete();
      
      assert.equal(returns, true);
    });
  });
  
  
  describe('the value does NOT get casted', function() {
    it('number 1 is different to string "1"', function() {
      set.add(1);
      const returns = set.delete('1');
      
      assert.equal(returns, false);
    });
  });
});
