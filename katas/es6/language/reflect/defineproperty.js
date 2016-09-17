// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {

  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'what`s the functions name again? :)';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = '';
      assert.equal(typeof Reflect.defineProperty, expectedType)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      let noObj = {};
      assert.throws(() => { Reflect.defineProperty(noObj, 'property', {value: 'value'}); }, TypeError);
    });
    it('accepts an object', function() {
      let obj = '';
      assert.doesNotThrow(() => { Reflect.defineProperty(obj, 'property', {value: 'value'}); });
    });
    it('accepts an instance (of a class)', function() {
      let instance;
      assert.doesNotThrow(() => { Reflect.defineProperty(instance, 'property', {value: 'value'}); });
    });
  });

  describe('2nd parameter is the name of the property to be defined on the object (normally a string)', function() {
    it('works with a `normal` string', function() {
      let obj = {};
      Reflect.defineProperty(obj, '', {});
      assert.equal('prop' in obj, true);
    });
    it('a number gets converted into a string', function() {
      let obj = {};
      Reflect.defineProperty(obj, 2, {});
      assert.equal('1' in obj, true);
    });
    it('`undefined` also gets converted into a string (watch out!)', function() {
      let obj = {};
      let undef = 1;
      Reflect.defineProperty(obj, undef, {});
      assert.equal('undefined' in obj, true);
    });
    it('it can be a symbol', function() {
      let obj = {};
      const sym = Symbol.for('prop');
      Reflect.defineProperty(obj, 'prop', {});
      assert.equal(sym in obj, true);
    });
  });

  describe('the `value` is part of the 3rd parameter, given as a property in an object `{value: ...}`', function() {
    // The entire complexity of the 3rd parameter might be covered in a later kata. 
    
    it('contains the initial value of the property, as an object in the property `value`', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop');
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type (even itself)', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop');
      assert.equal(obj.prop, obj);
    });
  });

  describe('the return value of the function indicates wether the property was defined successfully', function() {
    describe('returns true', function() {
      it('when the property was created (which requires the 3rd parameter too!!!)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty();
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is (just the 3rd param has to exist as `{}`)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance);
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when no property name is given (since no property has been added)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty;
        assert.equal(wasPropertyDefined, false);
      });
      it('when no 3rd parameter, the descriptor is given', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {value: 1});
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
  
});
