// ??: class - properties
// To do: make all tests pass, leave the assert lines unchanged!

describe('class - properties', () => {
  
  it('instance properties must be declared inside the constructor', () => {
    class Foo {
      constructor() {
        this.bar = true;
      }
    }
    assert.equal(new Foo().bar, true);
  });
  
});

//can not be defined in the class construct, must be in the constructor!!!!

Foo.prototype.x = 1
vs.
Foo.x = 1