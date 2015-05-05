// ??: class - super for properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('class - super for properties', () => {
  
  it('accessors must use super', () => {
    class A {
      get x() { return 1; }
    }
    class B extends A {
      get x() {
        return super.x;
      }
    }
    
    assert.equal(new B().x, 1);
  });
  
  it('accessors must use super', () => {
    class A {
      get x() { this._x = this._x || 1; return this._x; }
      set x(v) { this._x = v; }
    }
    class B extends A {
      constructor() {
        this.x++;
      }
    }
    
    const b = new B();
    assert.equal(b.x, 2);
  });
  
});
