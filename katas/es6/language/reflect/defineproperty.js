// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {
  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      //// const name = 'what`s the functions name again? :)';
      const name = 'defineProperty';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      //// const expectedType = '';
      const expectedType = 'function';
      assert.equal(typeof Reflect.defineProperty, expectedType)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      //// const noObj = {};
      const noObj = 0;
      assert.throws(() => { Reflect.defineProperty(noObj, 'property', {value: 'value'}); });
    });
    it('accepts an object', function() {
      //// const obj = '';
      const obj = {};
      assert.doesNotThrow(() => { Reflect.defineProperty(obj, 'property', {value: 'value'}); });
    });
    it('accepts an instance (of a class)', function() {
      //// const instance;
      const instance = new class {};
      assert.doesNotThrow(() => { Reflect.defineProperty(instance, 'property', {value: 'value'}); });
    });
  });

  describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
    it('works with a `normal` string', function() {
      const obj = {};
      //// Reflect.defineProperty(obj, '', {});
      Reflect.defineProperty(obj, 'prop', {});
      assert.equal('prop' in obj, true);
    });
    it('a number gets converted into a string', function() {
      const obj = {};
      //// Reflect.defineProperty(obj, 2, {});
      Reflect.defineProperty(obj, 1, {});
      assert.equal('1' in obj, true);
    });
    it('`undefined` also gets converted into a string (watch out!)', function() {
      const obj = {};
      //// const undef = 1;
      const undef = void 0;
      Reflect.defineProperty(obj, undef, {});
      assert.equal('undefined' in obj, true);
    });
    it('it can be a symbol', function() {
      const obj = {};
      const sym = Symbol.for('prop');
      //// Reflect.defineProperty(obj, 'prop', {});
      Reflect.defineProperty(obj, sym, {});
      assert.equal(sym in obj, true);
    });
  });

  describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
    // The entire complexity of the 3rd parameter might be covered in a later kata. 
    it('contains the initial value of the property, as an object in the property `value`', function() {
      const obj = {};
      //// Reflect.defineProperty(obj, 'prop');
      Reflect.defineProperty(obj, 'prop', {value: 'property value'});
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type (even itself)', function() {
      const obj = {};
      //// Reflect.defineProperty(obj, 'prop');
      Reflect.defineProperty(obj, 'prop', {value: obj});
      assert.equal(obj.prop, obj);
    });
  });

  describe('the return value of the function indicates wether the property was defined successfully', function() {
    describe('returns true', function() {
      it('when the property was created (which requires the 3rd parameter too!!!)', function() {
        const instance = new class {};
        //// const wasPropertyDefined = Reflect.defineProperty();
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 1});
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
        const instance = new class {};
        //// const wasPropertyDefined = Reflect.defineProperty(instance);
        const wasPropertyDefined = Reflect.defineProperty(instance, '', {});
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when a non-configurable property wants to be changed to configurable=true', function() {
        const obj = {};
        Reflect.defineProperty(obj, 'x', {configurable: false});
        //// const wasPropertyDefined = Reflect.defineProperty;
        const wasPropertyDefined = Reflect.defineProperty(obj, 'x', {configurable: true});
        assert.equal(wasPropertyDefined, false);
      });
      it('when the object we want to add a property to is frozen', function() {
        const instance = new class {};
        Object.freeze(instance);
        //// const wasPropertyDefined = Reflect.defineProperty({}, 'prop', {value: 1});
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 1});
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
});
