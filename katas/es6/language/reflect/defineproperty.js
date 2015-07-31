// 69: Reflect - defineProperty 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.defineProperty()` is like `Object.defineProperty()` but returns a Boolean.', function() {

  describe('the function itself', function() {
    it('is static on the `Reflect` object', function() {
      const name = 'defineProperty';
      assert.equal(name in Reflect, true);
    });
    it('is of type `function`', function() {
      const expectedType = 'function';
      assert.equal(typeof Reflect.defineProperty, expectedType)
    });
  });
  
  describe('the 1st parameter is the object on which to define a property', function() {
    it('fails if it is not an object', function() {
      assert.throws(() => { Reflect.defineProperty('not an object'); }, TypeError);
    });
    it('accepts an object', function() {
      assert.doesNotThrow(() => { Reflect.defineProperty({}); });
    });
    it('accepts an instance (of a class)', function() {
      let instance = new class {};
      assert.doesNotThrow(() => { Reflect.defineProperty(instance); });
    });
  });

  describe('2nd parameter', function() {
    describe('when it is/becomes a string', function() {
      it('works with a `normal` string', function() {
        let obj = {};
        Reflect.defineProperty(obj, 'prop', {});
        assert.equal('prop' in obj, true);
      });
      it('a number gets converted into a string', function() {
        let obj = {};
        Reflect.defineProperty(obj, 1, {});
        assert.equal('1' in obj, true);
      });
      it('`undefined` also gets converted into a string (watch out!)', function() {
        let obj = {};
        let undef;
        Reflect.defineProperty(obj, undef, {});
        assert.equal('undefined' in obj, true);
      });
    });
    describe('not a string', function() {
      it('it can be a symbol', function() {
        let obj = {};
        const sym = Symbol.for('prop');
        Reflect.defineProperty(obj, sym, {});
        assert.equal(sym in obj, true);
      });
    });
  });

  describe('the `value` in the 3rd parameter', function() {
    // The complexity of the 3rd parameter might be covered in another kata. 
    it('is the initial value of the property', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value: 'property value'});
      assert.equal(obj.prop, 'property value');
    });
    it('can be of any type', function() {
      let obj = {};
      Reflect.defineProperty(obj, 'prop', {value: obj});
      assert.equal(obj.prop, obj);
    });
  });

  describe('return value', function() {
    describe('returns true', function() {
      it('when the property was created', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 1, {});
        assert.equal(wasPropertyDefined, true);
      });
      it('no matter what the value of the property is', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop', {});
        assert.equal(wasPropertyDefined, true);
      });
    });
    describe('returns false', function() {
      it('when no property name is given (since no property has been added)', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance);
        assert.equal(wasPropertyDefined, false);
      });
      it('when `undefined` is given as a property name', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, void 0);
        assert.equal(wasPropertyDefined, false);
      });
      it('when no 3rd parameter, the descriptor is given', function() {
        let instance = new class {};
        const wasPropertyDefined = Reflect.defineProperty(instance, 'prop');
        assert.equal(wasPropertyDefined, false);
      });
    });
  });
  
});