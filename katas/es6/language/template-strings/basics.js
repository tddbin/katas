// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!


describe('Use backticks `` ` `` for template strings (not quotes `` \' `` or `` " ``)', function() {
  it('WHEN you write a string in backticks THEN it behaves just like a normal string', function() {
    var str = ``;
    assert.equal(str, 'like a string');
  });

  describe('GIVEN variables wrapped in `${` and `}`', function() {
    it('WHEN using `${x}` inside a template string THEN the value of `x` is written out instead', function() {
      var x = 42;
      var evaluated = `x=#x`;
      assert.equal(evaluated, 'x=' + x);
    });
    it('WHEN using multiple variables THEN they get evaluated too', function() {
      var x = 42;
      var y = 23;
      var evaluated = '${ x } + $ { y }';
      assert.equal(evaluated, x + '+' + y);
    });
  });

  describe('GIVEN expressions wrapped inside `${...}`', function() {
    it('WHEN wrapping an expression in `${...}` THEN they get evaluated', function() {
      var x = 42;
      var y = 23;
      var evaluated = `${ x } + ${ y }`;
      assert.equal(evaluated, x+y);
    });
    it('WHEN a function call is inside `${...}` THEN the result is rendered', function() {
      function getEnv(){
        return 'ECMAScript';
      }
      var evaluated = `${ getEnv }`;
      assert.equal(evaluated, 'ECMAScript');
    });
  });
});

