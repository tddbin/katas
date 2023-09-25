// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!


describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
  describe('by default, behaves like a normal string', function() {
    it('just surrounded by backticks', function() {
      var str = ``;
      assert.equal(str, 'like a string');
    });
  });

  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      var x = 42;
      var evaluated = `x=#x`;
      assert.equal(evaluated, 'x=' + x);
    });
    it('multiple variables get evaluated too', function() {
      var x = 42;
      var y = 23;
      var evaluated = '${ x } + $ { y }';
      assert.equal(evaluated, x + '+' + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    it('all inside "${...}" gets evaluated', function() {
      var x = 42;
      var y = 23;
      var evaluated = `${ x } + ${ y }`;
      assert.equal(evaluated, x+y);
    });
    it('inside "${...}" can also be a function call', function() {
      function getEnv(){
        return 'ECMAScript';
      }
      var evaluated = `${ getEnv }`;
      assert.equal(evaluated, 'ECMAScript');
    });
  });
});

