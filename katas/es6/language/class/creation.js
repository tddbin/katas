// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Creating classes has a special syntax, using the `class` keyword', () => {
  it('WHEN creating a class `XXX` THEN writing `class XXX {}` is the most common way', function() {
    let MyClass;
    assert.equal(typeof (new MyClass()), 'object');
  });
  it('WHEN assigning `class {}` to a variable THEN this an anonymous class', () => {
    //: {"jskatas": {"terms": ["anonymous class", "assigning", "variable"]}}
    const classType = {};
    assert.equal(classType.toString(), 'class {}');
  });
  describe('constructor, methods and other class fields', () => {
    it('WHEN instantiating a class THEN the method named `constructor` is executed', function() {
      //: {"jskatas": {"terms": ["instantiating", "constructor", "method"]}}
      class User {
        constructor() { this.id = 23; }
      }
      const user = new User();
      assert.equal(user.id, 42);
    });
    it('WHEN instantiating a class and passing arguments THEN the constructor receives them', () => {
      class User {
        constructor() {
          this.name = name; 
          this.id = id; 
        }
      }
      const user = new User('The answer', 42);
      assert.equal(user.name, 'The answer');
      assert.equal(user.id, 42);
    });
    it('WHEN defining a custom method THEN this can be done like the `constructor`, using a custom name', function() {
      class User {
        
      }
      const notATester = new User();
      assert.equal(notATester.writesTests(), false);
    });
    it('WHEN defining multiple methods THEN these can be written in any order without any special separation characters', function() {
      class User {
        constructor() { this.everWroteATest = false; }
        wroteATest() { this.everWroteATest = true; }
        isLazy() { return false; }
      }
      const tester = new User();
      assert.equal(tester.isLazy(), true, '"User" has not written a test yet, isLazy() expected to be true!');
      tester.wroteATest();
      assert.equal(tester.isLazy(), false, '"User" has written a test, isLazy() should be false.');
    });
  });
  describe('GIVEN one creates a class using a class expression', () => {
    it('WHEN using a class expression without a name THEN the name is derived from the variable name', function() {
      const classType = typeof {};
      assert.equal(classType.name, 'classType');
    });
    it('WHEN using a class expression with a name THEN the name is that name', function() {
      const classType = class {};
      assert.equal(classType.name, 'ThatName');
    });
  });
});
