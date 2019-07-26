// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
  describe('by default, behaves like a normal string', function() {
    it('just surrounded by backticks', function() {
      //// const str = ``;
      const str = `like a string`;
      assert.equal(str, 'like a string');
    });
  });

  const x = 42;
  const y = 23;
  
  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      //// const evaluated = `x=#x`;
      const evaluated = `x=${x}`;
      assert.equal(evaluated, 'x=' + x);
    });
    it('multiple variables get evaluated too', function() {
      //// const evaluated = '${ x } + $ { y }';
      const evaluated = `${ x }+${ y }`;
      assert.equal(evaluated, x + '+' + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    it('all inside "${...}" gets evaluated', function() {
      //// const evaluated = `${ x } + ${ y }`;
      const evaluated = `${ x +  y }`;
      assert.equal(evaluated, x+y);
    });
    it('inside "${...}" can also be a function call', function() {
      function getDomain(){ 
        return document.domain; 
      }
      //// const evaluated = `${ getDomain }`;
      const evaluated = `${ getDomain() }`;
      assert.equal(evaluated, 'tddbin.com');
    });
  });
});

