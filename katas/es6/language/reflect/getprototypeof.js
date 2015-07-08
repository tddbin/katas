// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {

  it('works like `Object.getPrototypeOf`', function() {
    const viaObject = Object.getPrototypeOf({});
    const viaReflect = Object.getPrototypeOf({});
    
    assert.strictEqual(viaObject, viaReflect);
  });

  it('throw TypeError for a non-object', function() {
    assert.throws(() => Reflect.getPrototypeOf(null), TypeError);
  });

  it('a `Number(1)` has a prototype', function() {
    const number = {};
    
    assert.equal(Reflect.getPrototypeOf(number), Object.prototype);
  });

  it('for a class, it is `Klass.prototype`', function() {
    class Klass {}
    
    assert.equal(Reflect.getPrototypeOf(new Klass()), Klass.prototype);
  });

  it('for a old-style class, works too', function() {
    function Klass() {}
    
    assert.equal(Reflect.getPrototypeOf(new Klass()), Klass.prototype);
  });

  it('coerce to object', function() {
    let arr = [];
    
    assert.equal(Reflect.getPrototypeOf(arr), Array.prototype);
  });

  // TODO
  // it('getting the prototype of an "exotic namespace object" returns `null`', function() {
  //   http://www.ecma-international.org/ecma-262/6.0/#sec-module-namespace-exotic-objects-getprototypeof
  //   Don't know how to write a test for this yet, without creating a dep in tddbin hardcoded
  //   PRs welcome
  //   assert.equal(Reflect.getPrototypeOf(namespace exotic object), null);
  // });

  

});