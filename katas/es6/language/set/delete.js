// 64: Set - delete
// To do: make all tests pass, leave the assert lines unchanged!

describe('`set.delete()` deletes an element from a set', function(){

  let set;
  beforeEach(() => set = new Set());

  describe('use `delete(<value>)` to delete an element', function() {
    beforeEach(function() {
      set.add('one').add('two').add('three');
    });
    it('`delete()` returns `true` when the element was found', function() {
      const returns = set.remove;
      assert.strictEqual(returns, true);
    });
    it('and the size decreases', function() {
      assert.equal(set.size, 2);
    });
  });
  
  describe('if nothing was deleted (no element with the given value was found)', function() {
    it('returns `false`', function() {
      set.add('one');
      const returns = set.delete('one');
      
      assert.equal(returns, false);
    });
  });
  
  describe('`undefined` is a valid value in a set', function() {
    it('deleting it, when it is not in the set, returns `false` too', function() {
      assert.equal(set.delete(whatToDelete), false);
    });
    
    it('`delete()` removes it, when its in the set', function() {
      assert.equal(set.delete(), true);
    });
  });
  
  
  describe('the value does NOT get casted', function() {
    it('number 1 is different to string "1"', function() {
      set.add(1);
      set.add('1');
      assert.equal(set.delete('1'), false);
    });
  });
});
