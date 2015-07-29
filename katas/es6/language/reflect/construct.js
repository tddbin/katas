// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {

  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'construct';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = 'function';
      assert.equal(typeof Reflect.construct, expectedType)
    });
  });
  
  describe('the first parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      assert.throws(() => { Reflect.construct(1) }, TypeError);
    });
    it('works giving a function', function() {
      const aFunction = () => {};
      assert.doesNotThrow(() => { Reflect.construct(aFunction) });
    });
    it('works giving a class', function() {
      const aClass = class {};
      assert.doesNotThrow(() => { Reflect.construct(aClass) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
    const validConstructTarget = class {};
    it('fails when it`s not an array(-like), e.g. a number', function() {
      const aNumber = 1;
      assert.throws(() => { Reflect.construct(validConstructTarget, aNumber) }, TypeError);
    });
    it('works with an array-like object', function() {
      let arrayLike = {length: 0};
      assert.doesNotThrow(() => { Reflect.construct(validConstructTarget, arrayLike) });
    });
    it('works with a real array', function() {
      assert.doesNotThrow(() => { Reflect.construct(validConstructTarget, []) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      let instance = Reflect.construct(Constructable);
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      it('if none given, nothing is passed', function() {
        class Constructable {
          constructor(...args) { this.args = args; }
        }
        let instance = Reflect.construct(Constructable);
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        class Constructable {
          constructor(...args) { this.args = args; }
        }
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        let instance = Reflect.construct(Constructable, argumentsList);
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      const expected = 2;
      assert.equal(Reflect.construct.length, expected);
    });
  });
  
});