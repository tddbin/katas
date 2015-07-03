// 59: Reflect - apply 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.apply` calls a target function', function() {

  it('it is a static method', function() {
    assert.equal(typeof Reflect.apply, 'function')
  });
  
  it('it calls a callable, e.g. a function', function() {
    const fn = () => 42;
    
    assert.equal(Reflect.apply(fn), 42);
  });
  
  it('passing it a non-callable throws a TypeError', function() {
    assert.throws(() => {Reflect.apply(1);}, TypeError);
  });
  
  it('the second argument is the scope (or the `this`)', function() {
    class FourtyTwo {
      constructor() { this.value = 42}
      fn() {return this.value}
    }
    let instance = new FourtyTwo();
    
    assert.deepEqual(Reflect.apply(instance.fn, instance), 42);
  });
  
  it('the third argument are the parameters passed to the call', function() {
    const expected = [42, 42, 42, 42, 42];
    assert.deepEqual(Reflect.apply(Array, null, [5]).fill(42), expected);
  });
  
});