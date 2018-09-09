// 27: class - super inside a method
// To do: make all tests pass, leave the assert lines unchanged!

describe('Inside a class use `super` to access parent methods', () => {
  it('use of `super` without `extends` fails (already when transpiling)', () => {
    //// class A {hasSuper() { return super; }}
    class A {hasSuper() { return false; }}
    assert.equal(new A().hasSuper(), false);
  });
  it('`super` with `extends` calls the method of the given name of the parent class', () => {
    class A {hasSuper() { return true; }}
    //// class B extends A {hasSuper() { return super.hasSuper; }}
    class B extends A {hasSuper() { return super.hasSuper(); }}
    assert.equal(new B().hasSuper(), true);
  });
  it('when overridden a method does NOT automatically call its super method', () => {
    class A {hasSuper() { return true; }}
    //// class B extends A {hasSuper() { return 'nothing'; }}
    class B extends A {hasSuper() {}}
    assert.equal(new B().hasSuper(), void 0);
  });
  it('`super` works across any number of levels of inheritance', () => {
    class A {iAmSuper() { return true; }}
    class B extends A {}
    //// class C extends B {iAmSuper() { return iAmSuper(); }}
    class C extends B {iAmSuper() { return super.iAmSuper(); }}
    assert.equal(new C().iAmSuper(), true);
  });
  it('accessing an undefined member of the parent class returns `undefined`', () => {
    class A {}
    //// class B extends A {getMethod() { return super.constructor; }}
    class B extends A {getMethod() { return super.notAMethod; }}
    assert.equal(new B().getMethod(), void 0);
  });
});
