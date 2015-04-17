// 25: class - extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('class can inherit from another', () => {

  describe('the default super class Object', () => {
  
    it('class A is an instance of Object (the default super class)', () => {
      class A {}
      
      assert.equal(new A() instanceof Object, true);
    });
  
    it('B extends A, B is also instance of Object', () => {
      class A {}
      class B extends A {}
      
      assert.equal(new B() instanceof Object, true);
    });
    
    it('extending null is different!', () => {
      class NullClass extends null {}
      
      let nullInstance = new NullClass();
      assert.equal(nullInstance instanceof Object, false);
    });
    
  });
  
  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      class A {}
      class B extends A {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    it('extend over multiple levels', () => {
      class A {}
      class B extends A {}
      class C extends B {}
      
      assert.equal(new C() instanceof A, true);
    });
  });
});
