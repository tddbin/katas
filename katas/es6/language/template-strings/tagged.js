// template strings - tagged
// To do: make all tests pass

describe('tagged template strings', function() {
  
  it('are preceeded by an expression, `toUpper` in this case', function() {
    function toUpper(s) { 
      return s.toString().toLowerCase();
    }
    assert.equal(toUpper`Go up!`, 'GO UP!');
  });
  
  describe('the expression can access each part of the template', function() {
    
    it('the strings in the template', function() {
      function toText(stringsArray) {
        return stringsArray[0] + 'one'; 
      }
      assert.equal(toText`uno${1}`, 'uno = one');
    });
    
    it('the first value in the template', function() {
      function firstValueOnly(stringsArray, firstValue, secondValue) { 
        return secondValue; 
      }
      var one = 1;
      var two = 2;
      assert.equal(firstValueOnly`uno=${one}, dos=${two}, tres=?`, '1');
    });
    
    it('all values in the template', function() {
      function valuesOnly(stringsArray, ...valuesArray) { // using the new ES6 rest syntax
        return valuesArray;
      }
      var one = 1;
      var two = 2;
      assert.equal(valuesOnly`uno=${one}, dos=${two}, tres=?`, '1; 2');
    });
    
    it('can also return an object', function() {
      function extractAll(stringsArray, ...valuesArray) {
        return stringsArray + valuesArray;
      }
      var one = 1;
      var two = 2;
      assert.deepEqual(
        extractAll`uno${one}dos${two}tres`,
        {strings: ["uno", "dos", "tres"], values: [1, 2]}
      );
    });
    
  });

});