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
      //// const actualType = '???';
      const actualType = 'function';
      assert.equal(actualType, typeof Reflect.construct)
    });
  });
  
  describe('the 1st parameter is the constructor to be invoked', function() {
    it('fails when given a number as constructor', function() {
      //// let aNumber = class {};
      let aNumber = 7;
      assert.throws(() => { Reflect.construct(aNumber, []) }, TypeError);
    });
    it('works given a function that can be instanciated', function() {
      //// let aFunction;
      let aFunction = function() {};
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
      //// let aNumber = [];
      let aNumber = 7;
      assert.throws(() => { Reflect.construct(aClass, aNumber) }, TypeError);
    });
    it('works with an array-like object (the `length` property look up should not throw)', function() {
      //// let arrayLike = {get length() { throw new Error(); }};
      let arrayLike = {get length() { return 7; }};
      assert.doesNotThrow(() => { Reflect.construct(aClass, arrayLike) });
    });
    it('works with a real array', function() {
      //// let realArray = '';
      let realArray = [];
      assert.doesNotThrow(() => { Reflect.construct(aClass, realArray) });
    });
  });

  describe('in use', function() {
    it('giving it a class it returns an instance of this class', function() {
      class Constructable {}
      //// let instance = Reflect.construct; // use Reflect.construct here!!!
      let instance = Reflect.construct(Constructable, []); // use Reflect.construct here!!!
      assert.equal(instance instanceof Constructable, true);
    });
    describe('the list of arguments are passed to the constructor as given', function() {
      class Constructable {
        constructor(...args) { this.args = args; }
      }
      it('if none given, nothing is passed', function() {
        //// let instance = Reflect.construct(Constructable, [1]);
        let instance = Reflect.construct(Constructable, []);
        assert.deepEqual(instance.args, []);
      });
      it('passing an array, all args of any type are passed', function() {
        const argumentsList = ['arg1', ['arg2.1', 'arg2.2'], {arg: 3}];
        //// let instance = Reflect.construct;
        let instance = Reflect.construct(Constructable, argumentsList);
        assert.deepEqual(instance.args, argumentsList);
      });
    });
  });

  describe('the length property', function() {
    it('of `Reflect.construct` is 2', function() {
      //// let actual;
      let actual = 2;
      assert.equal(actual, Reflect.construct.length);
    });
  });
});
