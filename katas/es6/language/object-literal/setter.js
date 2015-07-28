// 67: object-literal - setter
// To do: make all tests pass, leave the assert lines unchanged!

describe('An object literal can also contain setters', () => {

  describe('define a setter', function() {
    it('be prefixing the property with `set` (and make it a function)', function() {
      let theX = null;
      const obj = {
        set x(newX) { theX = newX; }
      };
      
      obj.x = 'the new X';
      assert.equal(theX, 'the new X');
    });
    it('the setter must have exactly one parameter', function() {
      let setterCalledWith = void 0;
      const obj = {
        set x(param) { 
          if (arguments.length === 1) {
            setterCalledWith = arguments[0];
          }
        }
      };
      
      assert.equal(obj.x = 'new value', setterCalledWith);
    });
  });

  describe('other stuff ...', function() {
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const publicPropertyName = 'x';
      const privatePropertyName = '_' + publicPropertyName;
      const obj = {
        [privatePropertyName]: null,
        set [publicPropertyName](param) { this[privatePropertyName] = param; }
      };
      
      obj.x = 'axe';
      assert.equal(obj._x, 'axe');
    });
  
    it('you can use `delete` to remove the property (before using it)', function() {
      let setterCalled = false;
      const obj = {
        set x(param) { setterCalled = true; }
      };
      
      // delete the property x here, to make the test pass
      delete obj.x;
      
      obj.x = true;
      assert.equal(setterCalled, false);
    });
  
  });  
  
  // TODO
  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
  // It might be corrected later, new knowledge welcome.
  // it('must not overlap with a pure property', function() {
  //   const obj = {
  //     x: 1,
  //     set x(val) { return 'ax'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
  // it('multiple `set` for the same property are not allowed', function() {
  //   const obj = {
  //     x: 1,
  //     set x(v) { return 'ax'; },
  //     set x(v) { return 'ax1'; }
  //   };
  //   assert.equal(obj.x, 'ax');
  // });
});
