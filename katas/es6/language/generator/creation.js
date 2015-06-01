// 49: Generator - creation
// To do: make all tests pass, leave the assert lines unchanged!

describe('generator can be created in multiple ways', function() {
  
  it('standard way, by adding `*` after `function`', function() {
    function* g() {yield 1;}
    
    assertIsGenerator(g());
  });
  
  it('as a function expression, by adding a `*` after `function`', function() {
    let g = function*() {yield 1;};
    
    assertIsGenerator(g());
  });
  
  it('inside an object by prefixing the function with `*`', function() {
    let obj = {
      * g() {yield 1;}
    };
    
    assertIsGenerator(obj.g());
  });
  
  it('computed generator names, are just prefixed with a `*`', function() {
    const generatorName = 'g';
    let obj = {
      * [generatorName]() {yield 1;}
    };
    
    assertIsGenerator(obj.g());
  });
  
  it('inside a class the same way', function() {
    const generatorName = 'g';
    class Klazz {
      * [generatorName]() {yield 1;}
    }
    
    assertIsGenerator(new Klazz().g());
  });

  function assertIsGenerator(gen) {
    const toStringed = '' + gen;
    assert.equal(toStringed, '[object Generator]');
  }
  
});