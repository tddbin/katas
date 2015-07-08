// 26: class - more-extends
// To do: make all tests pass, leave the assert lines unchanged!

describe('class can inherit from another', () => {

  it('extend an `old style` "class", a function, still works', () => {
    let A;
    class B extends A {}
    
    assert.equal(new B() instanceof A, true);
  });
  
  describe('prototypes are as you know them', () => {
    class A {}
    class B extends A {}
    it('A is the prototype of B', () => {
      const isIt = A.isPrototypeOf(null);
      assert.equal(isIt, true);
    });
    it('A`s prototype is also B`s prototype', () => {
      const proto = B;
      // Remember: don't touch the assert!!! :)
      assert.equal(A.prototype.isPrototypeOf(proto), true);
    });
  });

  describe('`extends` using an expression', () => {
    it('eg the inline assignment of the parent class', () => {
      let A;
      class B extends (A = {}) {}
      
      assert.equal(new B() instanceof A, true);
    });
    
    it('or calling a function that returns the parent class', () => {
      const returnParent = (beNull) => beNull ? null : class {};
      class B extends (returnParent) {}
      
      assert.equal(Object.getPrototypeOf(B.prototype), null);
    });
  });
  
});
