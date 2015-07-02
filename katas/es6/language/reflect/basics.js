// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('is not a function', function() {
      assert.equal(typeof Reflect, 'object');
    });
    
    it('it can not be instantiated', function() {
      assert.throws(() => { new Reflect() });
    });
    
    it('has not constructor', function() {
      assert.equal(Reflect.call, void 0);
    });
    
    it('can not be called as a function', function() {
      assert.throws(() => { Reflect(); });
    });
  });  
  
  describe('some `Reflect` usages', function() {
    
    it('`Reflect.construct()` is like new', function() {
      class Class {}
      assert.equal(Reflect.construct(Class) instanceof Class, true);
    });
    
    it('`Reflect.get()` returns a property`s value', function() {
      let obj = {x: 1};
      assert.equal(Reflect.get(obj, 'x'), 1);
    });
    
    it('`Reflect.has()` is like `in` just as a function', function() {
      let obj = {x: 1};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
    
  });
  
});