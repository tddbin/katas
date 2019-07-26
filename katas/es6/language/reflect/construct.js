// 68: Reflect - construct 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.construct` is the `new` operator as a function', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      //// const name = 'konstructor';
      const name = 'constructor';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      //// const expectedType = '???';
      const expectedType = 'function';
      assert.equal(typeof Reflect.construct, expectedType)
    });
  });
  
  describe('the 1st parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      //// const aNumber = class {};
      const aNumber = 7;
      assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
    });
    it('works given a function that can be instanciated', function() {
      //// const aFunction;
      const aFunction = function() {};
      assert.doesNotThrow(() => { Reflect.construct(aFunction, []) });
    });
    it('works given a class', function() {
      //// const aClass = {};
      const aClass = class {};
      assert.doesNotThrow(() => { Reflect.construct(aClass, []) });
    });
  });

  describe('the 2nd parameter is a list of arguments, that will be passed to the constructor', function() {
    
    const aClass = class {};
    it('fails when it`s not an array(-like), e.g. a number', function() {
      //// const aNumber = [];
      const aNumber = 7;
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it('works with an array-like object (the `length` property look up should not throw)', function() {
      //// const arrayLike = {get length() { throw new Error(); }};
      const arrayLike = {get length() { return 7; }};
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it('works with a real array', function() {
      //// const realArray = '';
      const realArray = [];
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      //// const instance = Reflect.construct; // use Reflect.construct here!!!
      const instance = Reflect.construct(Constructable, []); // use Reflect.construct here!!!
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...args) { this.args = args; }
      }
      it('if none given, nothing is passed', function() {
        //// const instance = Reflect.construct(Constructable, [1]);
        const instance = Reflect.construct(Constructable, []);
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        //// const instance = Reflect.construct;
        const instance = Reflect.construct(Constructable, argumentsList);
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      //// let expected;
      const expected = 2;
      assert.equal(Reflect.construct.length, expected);
    });
  });
});
