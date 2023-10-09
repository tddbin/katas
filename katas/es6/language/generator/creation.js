// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Generators can be created in multiple ways', function() {
  it('the most common way is by adding `*` after `function`', function() {
    function g() {}
    assert.equal(String(g()), '[object Generator]');
  });
  it('as a function expression, by adding a `*` after `function`', function() {
    let g = function() {};
    assert.equal(String(g()), '[object Generator]');
  });
  it('inside an object by prefixing the function name with `*`', function() {
    let obj = {
      g() {}
    };
    assert.equal(String(obj.g()), '[object Generator]');
  });
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    let obj = {
      [generatorName]() {}
    };
    assert.equal(String(obj.g()), '[object Generator]');
  });
  it('inside a class the same way', function() {
    const generatorName = 'g';
    class Klazz {
      [generatorName]() {}
    }
    assert.equal(String(new Klazz().g()), '[object Generator]');
  });
});
