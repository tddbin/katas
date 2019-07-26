// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      //// const expectedType = 'not a function!';
      const expectedType = 'object';
      assert.equal(typeof Reflect, expectedType);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      //// const tryToConstruct = () => { Reflect; };
      const tryToConstruct = () => { new Reflect; };
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      //// const expected = 'function';
      const expected = 'undefined';
      assert.equal(typeof Reflect.call, expected);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      //// const Class;
      const Class = class {};
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      //// const obj = {x: 42};
      const obj = {x: 23};
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      //// const obj = {};
      const obj = {x: 0};
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});