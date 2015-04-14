// 22: class - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('class creation', () => {

  it('has a simplified syntax', function() {
    class TestClass {}
    
    const instance = new TestClass();
    assert.equal(typeof instance, 'object');
  });

  it('special method is `constructor`', function() {
    class User {
      constructor(id) { this.id = id; }
    }
    
    const user = new User(42);
    assert.equal(user.id, 42);
  });

  it('defining a method is simple', function() {
    class User {
      writesTests() { return false; }
    }
    
    const notATester = new User();
    assert.equal(notATester.writesTests(), false);
  });

  it('multiple methods need no commas (opposed to object notation)', function() {
    class User {
      wroteATest() { this.everWroteATest = true; }
      isLazy() { return !this.everWroteATest; }
    }
    
    const tester = new User();
    tester.wroteATest();
    assert.equal(tester.isLazy(), false);
  });

});

