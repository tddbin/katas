// 3: template strings - tagged
// To do: make all tests pass, leave the asserts unchanged!

describe('tagged template strings, are an advanced form of template strings', function() {
  
  it('syntax: prefix the template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }
    var evaluated = tagFunc `template string`;
    assert.equal(evaluated, 'template string');
  });
  
  describe('the function can access each part of the template', function() {

    describe('the 1st parameter - receives only the pure strings of the template string', function() {

      function tagFunction(strings) {
        return strings;
      }

      it('the strings are an array', function() {
        var result = 'template string';
        assert.deepEqual(tagFunction`template string`, result);
      });

      it('expressions are NOT passed to it', function() {
        var tagged = tagFunction`one${23}`; 
        assert.deepEqual(tagged, ['one', 'two']);
      });

    });

    describe('the 2nd and following parameters - contain the values of the processed substitution', function() {

      var one = 1;
      var two = 2;
      var three = 3;
      it('the 2nd parameter contains the first expression`s value', function() {
        function firstValueOnly(strings, first_value) { 
          return firstValue;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });
      
      it('the 3rd parameter contains the second expression`s value', function() {
        function firstValueOnly(strings, firstValue, ____) { 
          return secondValue;
        }
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 2);
      });
      
      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
          return;
        }
        assert.deepEqual(valuesOnly`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
      });
      
    });     
  });

});